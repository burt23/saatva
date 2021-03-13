import React from "react";
import logo from "../images/logo.png";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    background: "#fff",
    position: "relative",
    width: "100vw",
    height: "5rem",
  },
  headerWrapper: {
    position: "relative",
    height: "5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const Header = ({ cart = [] }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <div>
          <img alt="saatvaLogo" src={logo} />
        </div>
        <div />
        <div>
          <Badge badgeContent={cart.length}>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
