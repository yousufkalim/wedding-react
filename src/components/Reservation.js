import React from "react";
import Grid from "@material-ui/core/Grid";
import IMG from "../assets/imges/IMG.png";
import userIcon from "../assets/icons/a.svg";
import date from "../assets/icons/date.svg";
import event from "../assets/icons/event.svg";
import group from "../assets/icons/group.svg";
import Letter from "../assets/icons/Letter.svg";

const Reservation = () => {
  return (
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
          <Grid container spacing={2}>
            <Grid sm={4} xs={12} style={{ margin: "0 10px 0 10px" }}>
              <img className="inputIcon" src={userIcon} />
              <input
                className="inputField"
                placeholder="Enter full name"
                type="text"
              ></input>
            </Grid>
            <Grid sm={4} xs={12} style={{ margin: "0 10px 0 10px" }}>
              <img className="inputIcon" src={Letter} />
              <input
                className="inputField"
                placeholder="Email address"
                type="text"
              ></input>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid sm={4} xs={12} style={{ margin: "0 10px 0 10px" }}>
              <img className="inputIcon" src={group} />
              <input
                className="inputField"
                placeholder="Guests "
                type="text"
              ></input>
            </Grid>
            <Grid sm={4} xs={12} style={{ margin: "0 10px 0 10px" }}>
              <img className="inputIcon" src={date} />
              <input
                className="inputField"
                placeholder="Select Date"
                type="text"
              ></input>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="eventBox">
            <Grid sm={8} xs={12}>
              <img className="inputEventIcon" src={event} />
              <input
                className="inputField"
                placeholder="Select Event"
                type="text"
              ></input>
            </Grid>
          </Grid>
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
  );
};

export default Reservation;
