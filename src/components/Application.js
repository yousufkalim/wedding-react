import React from "react";
import Grid from "@material-ui/core/Grid";
import Leafs from "../assets/imges/Leafs.png";
import Iphone from "../assets/imges/iphone.png";

const Application = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ background: "#FAF8F3", marginTop: "30px", padding: "40px" }}
    >
      <Grid item xs={12} sm={6}>
        <img src={Iphone} alt="Application" style={{ width: "100%", padding: "20px" }} />
      </Grid>
      <Grid item xs={12} sm={6} style={{ margin: "auto" }}>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          <br className="linebreak" /> elit, sed do eiusmod tempor incididunt ut{" "}
          <br className="linebreak" />
          labore et dolore magna aliqua. Quis ipsum
          <br className="linebreak" /> suspendisse ultrices gravida. Risus
          commodo viverra
          <br className="linebreak" /> maecenas accumsan lacus vel facilisis.{" "}
        </p>
        <h2 className="h2">
          “Lorem ipsum dolor sit hold
          <br className="linebreak" /> amet, consectetur”
        </h2>
        <div className="leafIcon">
          <img src={Leafs} alt="Leaf" />
        </div>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur <br className="linebreak" />
          adipiscing elit, sed do eiusmod tempor incididunt{" "}
          <br className="linebreak" />
          ut labore et dolore.
        </p>
      </Grid>
    </Grid>
  );
};

export default Application;
