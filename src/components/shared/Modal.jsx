import React from "react";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DisplayCard from "./Card";
import Tag from "./Tag";

/*
 * FIXME:
 * Having trouble understanding this documentation:
 * https://material-ui.com/components/dialogs/#dialog
 * I tried it with useState like the docs, but the component won't close
 * on outside click
 * Weirdly pressing ESC can close it...
 *
 * BUG 2: Cannot scroll...by default it should be scrollable
 */
export default function DetailedSummary({
  type,
  id,
  title,
  subtitle,
  image,
  tags,
  description,
  favorited,
  query,
  open,
  handleClose,
  reducer,
}) {
  const dispatch = useDispatch();
  return (
    <Modal className="modal" open={open} onClose={handleClose}>
      <Card className="modal-card">
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <img src={image} alt={title} />
            </Grid>
            <Grid item xs={6}>
              <h2>
                {title}
                <div
                  className="modal-favorite-icon"
                  onClick={() => dispatch(reducer({ index: id }))}
                >
                  {favorited ? (
                    <FavoriteIcon fontSize="large" />
                  ) : (
                    <FavoriteBorderIcon fontSize="large" />
                  )}
                </div>
              </h2>
              <h5>{subtitle}</h5>
              {tags &&
                tags.map((tag) => {
                  return <Tag text={tag} />;
                })}
              <p>{description}</p>
            </Grid>
          </Grid>
          <h4>Compatible {type === "homes" ? "Lots" : "Home Plans"}</h4>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <DisplayCard title="TODO" />
            </Grid>
            <Grid item xs={4}>
              <DisplayCard title="TODO" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
}
