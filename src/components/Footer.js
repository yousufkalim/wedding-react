import React from "react";
import Grid from "@material-ui/core/Grid";
import RSVP from "../assets/icons/RSVP.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Pinterest from "../assets/icons/Pinterest.svg";
import Twitter from "../assets/icons/Twitter.svg";

const Footer = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          background: "#FAF8F3",
          marginTop: "30px",
          padding: "40px",
          justifyContent: "center",
        }}
      >
        <h1
          className="h1"
          style={{ opacity: "0.4", fontWeight: "normal", fontSize: "30px" }}
        >
          WeddingVenue.
        </h1>
        <Grid container spacing={1} style={{ justifyContent: "center" }}>
          <p className="p" style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida.
            <br /> Risus commodo viverra maecenas accumsan lacus vel facilisis.{" "}
          </p>
        </Grid>
        <div className="socialBox">
          <img src={Facebook} className="socialIcon" alt="facebook link" />
          <img src={Twitter} className="socialIcon" alt="twitter link" />
          <img src={Linkedin} className="socialIcon" alt="linkedin link" />
          <img src={Pinterest} className="socialIcon" alt="pinterest link" />
          <img
            src={RSVP}
            style={{ width: "22%", margin: "5px", padding: "5px" }}
          />
        </div>
      </Grid>
      <div className="footer">
        <p>All rights are reserved by @FALCON CONSULTING</p>
      </div>
    </>
  );
};

export default Footer;
