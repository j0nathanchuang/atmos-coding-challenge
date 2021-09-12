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
          {lots.map((lot) => {
              return (
                <Grid item xs={4}>
                  {lot.description}
                </Grid>
              );
            })}
        </Container>
      </Grid>
    </Grid>
  );
}
