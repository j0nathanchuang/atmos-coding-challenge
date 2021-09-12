import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Sidebar from "../components/navigation/Sidebar";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";

import { API } from "../api/mock-api";

export default function Homes() {
  const homes = API.getHomePlans();
  // const [homes, setHomes] = useState(null);

  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Container className="main">
          <Button text="Show Saved Homes" />
          <Grid container spacing={2}>
            {homes.map((home) => {
              return (
                <Grid item xs={4}>
                  <Card details={home} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
