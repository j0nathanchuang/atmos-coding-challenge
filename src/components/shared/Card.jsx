import React, { useState } from "react";
import { useLocation } from "react-router";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Tag from "./Tag";
import Modal from "./Modal";

export default function DisplayCard({
  type,
  title,
  subtitle,
  image,
  tags,
  description,
  favored,
}) {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const selected = query.get("selectedHomePlan") || query.get("selectedLot");

  const [open, setOpen] = useState(false);
  function handleClick() {
    // if (type === "homes") {
    //   window.open(`/homes?selectedHomePlan=${title}`, "_self");
    // } else {
    //   window.open(`/lots?selectedLot=${title}`, "_self");
    // }

    setOpen(true);
    // query.set('selectedHomePlan', title);
    // window.location.search = query;
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <Card className="display-card" onClick={handleClick}>
      <div className="favorite-icon">
        {favored ? (
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
        title={title}
        subtitle={subtitle}
        image={image}
        tags={tags}
        description={description}
        favored={favored}
        query={query}
        open={open}
        handleClose={handleClose}
      />
    </Card>
  );
}
