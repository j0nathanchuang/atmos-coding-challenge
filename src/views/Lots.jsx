import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Sidebar from "../components/navigation/Sidebar";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";

import { API } from "../api/mock-api";

export default function Lots() {
  const lots = API.getLots();

  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Container className="main">
          <Button text="Show Saved Lots" />
          <Grid container spacing={2}>
            {lots.map((lot) => {
              const { address, acres, description, image } = lot;
              return (
                <Grid item xs={4}>
                  <Card
                    type="lots"
                    title={address}
                    subtitle={`${acres} acres - ${(acres * 43560) | 0} sqft`}
                    description={description}
                    image={image}
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
