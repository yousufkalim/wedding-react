import React from "react";
import Grid from "@material-ui/core/Grid";
import Line from "../assets/icons/line.png";
import illustration1 from "../assets/imges/illustration1.png";
import illustration2 from "../assets/imges/illustration2.png";
import illustration3 from "../assets/imges/illustration3.png";
import illustration4 from "../assets/imges/illustration4.png";

const TopNotchFeatures = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{ marginTop: "5%", justifyContent: "center" }}
      >
        <h1 className="h1" style={{ textAlign: "center" }}>
          Top-notch features for <br /> your clients
        </h1>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{
          marginTop: "0.2%",
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
        spacing={4}
        style={{
          marginTop: "0.2%",
          marginBottom: "0.2%",
          padding: "0 5% 0 5%",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          container
          xs={12}
          sm={3}
          style={{
            justifyContent: "center",
          }}
        >
          <img src={illustration1} />
          <h3 className="h3">
            Send virtual invites to <br />
            the guests
          </h3>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={3}
          style={{
            justifyContent: "center",
          }}
        >
          <img src={illustration2} />
          <h3 className="h3">
            Share the best pictures and <br />
            videos among the guests, and <br />
            project them on the screen
          </h3>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={3}
          style={{
            justifyContent: "center",
          }}
        >
          <img src={illustration3} />
          <h3 className="h3">
            Create the agenda of the <br />
            D-day
          </h3>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={3}
          style={{
            justifyContent: "center",
          }}
        >
          <img src={illustration4} />
          <h3 className="h3">
            Chat with all the vendors <br />
            and guests
          </h3>
        </Grid>
      </Grid>
    </>
  );
};

export default TopNotchFeatures;
