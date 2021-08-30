import React from "react";
import Grid from "@material-ui/core/Grid";
import Img from "../assets/imges/img1.png";

const MakeDifference = () => {
  return (
    <Grid
      container
      spacing={1}
      style={{ marginTop: "8%", justifyContent: "center" }}
    >
      <p className="p">Lorem ipsum dolor sit amet consectetur</p>
      <Grid container spacing={1} style={{ justifyContent: "center" }}>
        <h1 className="h1">Make the difference and become irresistible</h1>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{ justifyContent: "center" }}
        >
          <p className="p">
            With your app, the clients and vendors have
            <br /> the best tool to organize their wedding and <br />
            have fun. Beat the competition and become <br />
            the one-of-a-kind to provide such a service.
          </p>
        </Grid>
        <Grid container item xs={12} sm={6} className="forText">
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipi-
            <br />
            scing elit, sed do eiusmod tempor incididunt ut
            <br /> labore et dolore magna aliqua. Quis ipsum sus-
            <br />
            pendisse ultrices gravida. Risus commodo <br />
          </p>
        </Grid>
      </Grid>
      <img src={Img} style={{ width: "100%" }} />
    </Grid>
  );
};

export default MakeDifference;
