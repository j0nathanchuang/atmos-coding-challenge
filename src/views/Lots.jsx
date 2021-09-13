import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Sidebar from "../components/navigation/Sidebar";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import { favorite } from "../reducers/lots";

export default function Lots() {
  return <LotsAbstraction />;
}

/*
 * Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
 * 1. You might have mismatching versions of React and the renderer (such as React DOM)
 * 2. You might be breaking the Rules of Hooks
 * 3. You might have more than one copy of React in the same app
 *
 * DOING THIS BECAUSE OF THE ABOVE ERROR
 */
function LotsAbstraction() {
  const lots = useSelector((state) => state.lots.lots);

  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Container className="main">
          <Button text="Show Saved Lots" />
          <Grid container spacing={2}>
            {lots.map((lot, idx) => {
              const { address, acres, description, image, favorited } = lot;
              return (
                <Grid item xs={4}>
                  <Card
                    type="lots"
                    id={idx}
                    title={address}
                    subtitle={`${acres} acres - ${(acres * 43560) | 0} sqft`}
                    description={description}
                    image={image}
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
