import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Cart from "../assets/icons/Cart.png";
import Menu from "../assets/icons/Menu.png";
import Search from "../assets/icons/search.png";

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
    fontFamily: "Times New Roman",
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

  return (
    <AppBar color="white" position="sticky" className={classes.root}>
      <Toolbar color="">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          W Event
        </IconButton>

        <Typography className={classes.title}>Home</Typography>
        <Typography className={classes.title}>About</Typography>
        <Typography className={classes.title}>Services</Typography>
        <Typography className={classes.title}>Pages</Typography>
        <Typography className={classes.title}>News</Typography>
        <Typography className={classes.title}>Contact</Typography>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <button
            style={{
              background: "#E2657C",
              fontSize: "10px",
              padding: "12px 17px 12px 17px",
              border: "none",
              color: "white",
              fontFamily: "roman",
            }}
            variant="contained"
            color="secondary"
          >
            Get A Quotation
          </button>
          <span>
            <img
              src={Search}
              style={{ margin: "3px", padding: "3px", width: "20%" }}
            />
            <img
              src={Cart}
              style={{ margin: "3px", padding: "3px", width: "23%" }}
            />
            <img
              src={Menu}
              style={{ margin: "3px", padding: "3px", width: "20%" }}
            />
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
}
