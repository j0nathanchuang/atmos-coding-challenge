import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DisplayCard from "./Card";
import Tag from "./Tag";

import { favorite as homeFavorite } from "../../reducers/homes";
import { favorite as lotFavorite } from "../../reducers/lots";

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
  const homes = useSelector((state) => state.homes.homes);
  const lots = useSelector((state) => state.lots.lots);
  const combos = useSelector((state) => state.combinations.combinations);
  const dispatch = useDispatch();

  /*
   * getCompatibles
   * Accepts type (homes or lots), id (homePlanId or lotId)
   * Return array of compatible <type> based on given id
   */
  function getCompatibles(type, id) {
    // Get opposite <type> ids
    let ids = [];
    combos.forEach(({ homePlanId, lotId }) => {
      if (type === "homes" && homePlanId === id) {
        ids.push(lotId);
      }
      if (type === "lots" && lotId === id) {
        ids.push(homePlanId);
      }
    });
    // Add actual opposite <type> objects into array to be returned
    // Format data to match Card component props
    let cards = [];
    if (type === "homes") {
      ids.forEach((id) => {
        lots.forEach((lot) => {
          const { lotId, address, acres, description, image, favorited } = lot;
          if (lotId === id) {
            cards.push({
              type: "lots",
              id: lotId,
              title: address,
              subtitle: `${acres} acres - ${(acres * 43560) | 0} sqft`,
              image,
              description,
              favorited,
            });
          }
        });
      });
    } else {
      // type === lots
      ids.forEach((id) => {
        homes.forEach((home) => {
          const {
            homePlanId,
            name,
            numBeds,
            numBaths,
            sqft,
            tags,
            description,
            image,
            favorited,
          } = home;
          if (homePlanId === id) {
            cards.push({
              type: "homes",
              id: homePlanId,
              title: name,
              subtitle: `${numBeds} beds - ${numBaths} baths - ${sqft} sqft`,
              image,
              tags,
              description,
              favorited,
            });
          }
        });
      });
    }

    return cards;
  }

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
                  onClick={() => dispatch(reducer({ id: id }))}
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
            {getCompatibles(type, id).map((item) => {
              return (
                <Grid item xs={4}>
                  <DisplayCard
                    type={item.type}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    tags={item.tags}
                    description={item.description}
                    favorited={item.favorited}
                    reducer={item.type === "homes" ? homeFavorite : lotFavorite}
                  />
                </Grid>
              );
            })}
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
