import React from "react";
import Image from "../assets/imges/Image.png";
import arrowIcon from "../assets/icons/arrowIcon.png";
import Grid from "@material-ui/core/Grid";
import Leafs from "../assets/imges/Leafs.png";
import Iphone from "../assets/imges/iphone.png";
import Img from "../assets/imges/img1.png";
import Line from "../assets/icons/line.png";
import illustration1 from "../assets/imges/illustration1.png";
import illustration2 from "../assets/imges/illustration2.png";
import illustration3 from "../assets/imges/illustration3.png";
import illustration4 from "../assets/imges/illustration4.png";
import icon1 from "../assets/icons/ico1.png";
import icon2 from "../assets/icons/ico2.png";
import icon3 from "../assets/icons/ico3.png";
import IMG from "../assets/imges/IMG.png";
import userIcon from "../assets/icons/a.svg";
import date from "../assets/icons/date.svg";
import event from "../assets/icons/event.svg";
import group from "../assets/icons/group.svg";
import Letter from "../assets/icons/Letter.svg";
import RSVP from "../assets/icons/RSVP.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Pinterest from "../assets/icons/Pinterest.svg";
import Twitter from "../assets/icons/Twitter.svg";
const Body = () => {
  return (
    <>
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

      <Grid
        container
        spacing={2}
        style={{ background: "#FAF8F3", marginTop: "30px", padding: "40px" }}
      >
        <Grid item xs={12} sm={6}>
          <img src={Iphone} style={{ width: "100%", padding: "20px" }} />
        </Grid>
        <Grid item xs={12} sm={6} className="" style={{ margin: "auto" }}>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            <br className="linebreak" /> elit, sed do eiusmod tempor incididunt
            ut <br className="linebreak" />
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
            <img src={Leafs} />
          </div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur <br className="linebreak" />
            adipiscing elit, sed do eiusmod tempor incididunt{" "}
            <br className="linebreak" />
            ut labore et dolore.
          </p>
        </Grid>
      </Grid>

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
            // marginTop: "0.1%",
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

      <Grid
        container
        spacing={2}
        style={{
          justifyContent: "center",
          padding: "35px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            padding: "6%",
          }}
        >
          <img src={IMG} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <h1
            className="h1"
            style={{ padding: "18% 0 0px 0", marginLeft: "10px" }}
          >
            Make Reservation
          </h1>
          <form>
            <div className="inputcontainer">
              <div
                className="inputContainer"
                style={{ margin: "0 10px 0 10px" }}
              >
                <img className="inputIcon" src={userIcon} />
                <input
                  className="inputField"
                  placeholder="Enter full name"
                  type="text"
                ></input>
              </div>
              <div
                className="inputContainer"
                style={{ margin: "0 10px 0 10px" }}
              >
                <img className="inputIcon" src={Letter} />
                <input
                  className="inputField"
                  placeholder="Email address"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputcontainer">
              <div
                className="inputContainer"
                style={{ margin: "0 10px 0 10px" }}
              >
                <img className="inputIcon" src={group} />
                <input
                  className="inputField"
                  placeholder="Guests "
                  type="text"
                ></input>
              </div>
              <div
                className="inputContainer"
                style={{ margin: "-2px 10px 0 10px" }}
              >
                <img className="inputIcon" src={date} />
                <input
                  className="inputField"
                  placeholder="Select Date"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="inputEvent">
              <div
                className="inputContainer"
                style={{ margin: "0 10px 0 10px" }}
              >
                <img className="inputEventIcon" src={event} />
                <input
                  className="inputField"
                  placeholder="Select Event"
                  type="text"
                ></input>
              </div>
            </div>
            <div
              className="reservationButtondiv"
              style={{ width: "72%", textAlign: "right", marginTop: "20px" }}
            >
              <button
                className="reservationButton"
                variant="contained"
                color="secondary"
              >
                Make reservation
              </button>
            </div>
          </form>
        </Grid>
      </Grid>

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
            margin: "auto",
          }}
        >
          <img
            src={Facebook}
            style={{ width: "10%", margin: "5px", padding: "5px" }}
          />

          <img
            src={Twitter}
            style={{ width: "10%", margin: "5px", padding: "5px" }}
          />
          <img
            src={Linkedin}
            style={{ width: "10%", margin: "5px", padding: "5px" }}
          />
          <img
            src={Pinterest}
            style={{ width: "10%", margin: "5px", padding: "5px" }}
          />
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

export default Body;
