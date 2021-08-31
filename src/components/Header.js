import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Cart from "../assets/icons/Cart.png";
import Menu from "../assets/icons/Menu.png";
import Search from "../assets/icons/search.png";
import NavIcon from "../assets/icons/navbaricon.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
  },
  menuButton: {
    fontSize: "21px",
    fontWeight: "bold",
    opacity: "0.8",
    margin: "0 20px 0 12px",
    fontFamily: "roman",
  },
  title: {
    flexGrow: 0.06,
    textAlign: "center",
    fontSize: "16px",
    padding: "0px",
    fontFamily: "roman",
    opacity: ".7",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [flag, setFlag] = useState(false);

  return (
    <AppBar color="white" position="sticky" className={classes.root}>
      <Toolbar color="" className={flag ? "showToolbar" : "hideToolbar"}>
        <IconButton
          edge="start"
          className={`${classes.menuButton} IconButton`}
          color="inherit"
          aria-label="menu"
        >
          W Event
          <div
            edge="start"
            className={`${classes.menuButton} navIconbox`}
            color="inherit"
            aria-label="menu"
            onClick={() => setFlag(!flag)}
          >
            <img src={NavIcon} style={{ width: "18%" }} />
          </div>
        </IconButton>

        <Typography className={classes.title}>Home</Typography>
        <Typography className={classes.title}>About</Typography>
        <Typography className={classes.title}>Services</Typography>
        <Typography className={classes.title}>Pages</Typography>
        <Typography className={classes.title}>News</Typography>
        <Typography className={classes.title}>Contact</Typography>
        <div className={"navbarIconDiv"}>
          <button
            className="QuotationButton"
            variant="contained"
            color="secondary"
          >
            Get A Quotation
          </button>
          <span>
            <img src={Search} className="navicon" />
            <img
              src={Cart}
              style={{ margin: "3px", padding: "3px", width: "23%" }}
            />
            <img src={Menu} className="navicon" />
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
}
