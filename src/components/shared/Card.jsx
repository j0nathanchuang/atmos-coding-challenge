import React, { useState } from "react";
// import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Tag from "./Tag";
import Modal from "./Modal";

export default function DisplayCard({
  type,
  id,
  title,
  subtitle,
  image,
  tags,
  description,
  favorited,
  reducer,
}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  /* ATTEMPT AT CREATING QUERIES */
  // const { search } = useLocation();
  // const query = new URLSearchParams(search);
  // const selected = query.get("selectedHomePlan") || query.get("selectedLot");

  function handleClick() {
    // if (type === "homes") {
    //   window.open(`/homes?selectedHomePlan=${title}`, "_self");
    //   query.set('selectedHomePlan', title);
    //   window.location.search = query;
    // } else { // type === "lots"
    //   window.open(`/lots?selectedLot=${title}`, "_self");
    // }
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function clickFavorite(e) {
    e.stopPropagation();
    dispatch(reducer({ id: id }));
  }
  return (
    <Card className="display-card" onClick={handleClick}>
      <div className="favorite-icon" onClick={clickFavorite}>
        {favorited ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
      </div>
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent>
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        {tags &&
          tags.map((tag) => {
            return <Tag text={tag} />;
          })}
        <p>{description}</p>
      </CardContent>
      <Modal
        type={type}
        id={id}
        title={title}
        subtitle={subtitle}
        image={image}
        tags={tags}
        description={description}
        favorited={favorited}
        open={open}
        handleClose={handleClose}
        reducer={reducer}
      />
    </Card>
  );
}
