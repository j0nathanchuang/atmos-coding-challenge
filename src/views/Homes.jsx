import React from "react";
import { useSelector } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Sidebar from "../components/navigation/Sidebar";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import { favorite } from "../reducers/homes";

export default function Homes() {
  return <HomesAbstraction />;
}

/*
 * Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
 * 1. You might have mismatching versions of React and the renderer (such as React DOM)
 * 2. You might be breaking the Rules of Hooks
 * 3. You might have more than one copy of React in the same app
 *
 * DOING THIS BECAUSE OF THE ABOVE ERROR
 */
function HomesAbstraction() {
  const homes = useSelector((state) => state.homes.homes);
  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Container className="main">
          <Button text="Show Saved Homes" />
          <Grid container spacing={2}>
            {homes.map((home, idx) => {
              const {
                name,
                numBeds,
                numBaths,
                sqft,
                tags,
                description,
                image,
                favorited,
              } = home;
              return (
                <Grid item xs={4}>
                  <Card
                    type="homes"
                    id={idx}
                    title={name}
                    subtitle={`${numBeds} beds - ${numBaths} baths - ${sqft} sqft`}
                    image={image}
                    tags={tags}
                    description={description}
                    favorited={favorited}
                    reducer={favorite}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}