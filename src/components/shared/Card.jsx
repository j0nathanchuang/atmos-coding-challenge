import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Tag from "./Tag";

export default function DisplayCard({
  title,
  subtitle,
  image,
  tags,
  description,
  favored,
}) {
  return (
    <Card className="display-card">
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
        {(tags) && tags.map((tag) => {
          return <Tag text={tag} />;
        })}
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
