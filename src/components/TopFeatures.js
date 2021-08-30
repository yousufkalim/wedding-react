import React from "react";
import Grid from "@material-ui/core/Grid";
import Line from "../assets/icons/line.png";

import icon1 from "../assets/icons/ico1.png";
import icon2 from "../assets/icons/ico2.png";
import icon3 from "../assets/icons/ico3.png";

const TopFeatures = () => {
  return (
    <Grid
      container
      spacing={1}
      style={{
        background: "#FAF8F3",
        marginTop: "5%",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      <h1 className="h1" style={{ textAlign: "center" }}>
        Top features for you
      </h1>
      <Grid
        container
        spacing={1}
        style={{
          marginBottom: "0.2%",
          justifyContent: "center",
        }}
      >
        <div>
          <img src={Line} style={{ width: "100%" }} />
        </div>
      </Grid>
      <Grid
        container
        spacing={3}
        className="topfeature"
        style={{
          padding: "0 5% 0 10%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            padding: "3%",
          }}
        >
          <img src={icon1} />
          <h3
            className="h3"
            style={{ textAlign: "left", padding: "10px 0 10px 0" }}
          >
            Rating feature
          </h3>

          <p className="p2">
            Lorem ipsum dolor sit amet, con-
            <br />
            sectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            padding: "3%",
          }}
        >
          <img src={icon2} />
          <h3
            className="h3"
            style={{ textAlign: "left", padding: "10px 0 10px 0" }}
          >
            Booking Calender
          </h3>
          <p className="p2">
            Lorem ipsum dolor sit amet, con-
            <br />
            sectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            padding: "3%",
          }}
        >
          <img src={icon3} />
          <h3
            className="h3"
            style={{ textAlign: "left", padding: "10px 0 10px 0" }}
          >
            Partners Page
          </h3>
          <p className="p2">
            Lorem ipsum dolor sit amet, con-
            <br />
            sectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopFeatures;
