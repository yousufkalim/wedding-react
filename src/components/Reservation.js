import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import IMG from "../assets/imges/IMG.png";
import userIcon from "../assets/icons/a.svg";
import date from "../assets/icons/date.svg";
import event from "../assets/icons/event.svg";
import group from "../assets/icons/group.svg";
import Letter from "../assets/icons/Letter.svg";

import { inputHandler, submitHandler } from "../utils/Reservation";

const Reservation = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    guests: "",
    selectDate: "",
    selectEvent: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    guests: "",
    selectDate: "",
    selectEvent: "",
  });
  const [spinner, setSpinner] = useState(false);
  const [dateType, setDatetype] = useState("text");

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
      <Grid item xs={12} sm={6}>
        <h1
          className="h1"
          style={{ padding: "18% 0 0px 0", marginLeft: "10px" }}
        >
          Make Reservation
        </h1>
        <form
          onSubmit={(e) =>
            submitHandler(e, data, setData, error, setError, setSpinner)
          }
        >
          <Grid container spacing={2}>
            <Grid sm={4} xs={12} style={{ margin: "0 10px 0 10px" }}>
              <img className="inputIcon" src={userIcon} />
              <input
                className="inputField"
                placeholder="Enter full name"
                value={data.name}
                name="name"
                onChange={(e) =>
                  inputHandler(e, data, setData, error, setError)
                }
                type="text"
              ></input>
            </Grid>
            <Grid sm={4} xs={12} style={{ margin: "0 10px 0 10px" }}>
              <img className="inputIcon" src={Letter} />
              <input
                className="inputField"
                placeholder="Email address"
                value={data.email}
                name="email"
                onChange={(e) =>
                  inputHandler(e, data, setData, error, setError)
                }
                type="text"
              ></input>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid sm={4} xs={12} style={{ margin: "10px 10px 0 10px" }}>
              <div className="custom_error">{error.name}</div>
            </Grid>
            <Grid sm={4} xs={12} style={{ margin: "10px 10px 0 10px" }}>
              <div className="custom_error">{error.email}</div>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid sm={4} xs={12} style={{ margin: "0 10px 0 10px" }}>
              <img className="inputIcon" src={group} />
              <input
                className="inputField"
                placeholder="Guests"
                value={data.guests}
                name="guests"
                onChange={(e) =>
                  inputHandler(e, data, setData, error, setError)
                }
                type="text"
              ></input>
            </Grid>
            <Grid sm={4} xs={12} style={{ margin: "0 10px 0 10px" }}>
              <img className="inputIcon" src={date} />
              <input
                className="inputField"
                placeholder="Select Date"
                value={data.selectDate}
                name="selectDate"
                onFocus={() => setDatetype("date")}
                onBlur={() => setDatetype("text")}
                onChange={(e) =>
                  inputHandler(e, data, setData, error, setError)
                }
                type={dateType}
              ></input>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid sm={4} xs={12} style={{ margin: "10px 10px 0 10px" }}>
              <div className="custom_error">{error.guests}</div>
            </Grid>
            <Grid sm={4} xs={12} style={{ margin: "10px 10px 0 10px" }}>
              <div className="custom_error">{error.selectDate}</div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="eventBox">
            <Grid sm={12} xs={12}>
              <img className="inputEventIcon" src={event} />
              <input
                className="inputField"
                placeholder="Select Event"
                value={data.selectEvent}
                name="selectEvent"
                onChange={(e) =>
                  inputHandler(e, data, setData, error, setError)
                }
                type="text"
              ></input>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="eventBox">
            <Grid sm={8} xs={12}>
              <div className="custom_error">{error.selectEvent}</div>
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
              type="submit"
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
