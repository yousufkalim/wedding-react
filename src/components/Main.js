import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from "../assets/imges/Image.png";
import arrowIcon from "../assets/icons/arrowIcon.png";

const Main = () => {
  return (
    <Grid container spacing={2} className="main1">
      <Grid
        item
        xs={12}
        sm={6}
        className="main1Image"
        style={{ marginLeft: "20px" }}
      >
        <img src={Image} style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={12} sm={6} className="mainText">
        <h1>
          Provide the best <span>experience</span> for
          <br className="linebreak" />
          your clients and become <br className="linebreak" />
          unique !
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br className="linebreak" />
          elit, sed do eiusmod tempor incididunt ut labore et{" "}
          <br className="linebreak" />
          dolore magna aliqua. Quis ipsum suspen.
        </p>

        <div className="textIcon">
          <span>Start Booking</span>
          <img src={arrowIcon} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Main;
