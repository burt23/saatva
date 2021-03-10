// import logo from "./logo.svg";
import { makeStyles } from "@material-ui/core";

import "./App.css";
const useStyles = makeStyles({
  root: {
    background: "#f6f5f3",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    background: "#ffffff",
    position: "relative",
    height: "5rem",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
  },
  button: {
    background: "#d4aa63",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.firstLevelFlexChild}>
        <header className={classes.header}>
          <div className={classes.headerItem}>hello</div>
          <div className={classes.headerItem}>world</div>
        </header>
      </div>
      <div className={classes.firstLevelFlexChild}>
        <div className={classes.content}>
          <div className={classes.img}>img</div>
          <div className={classes.selector}>selector</div>
        </div>
      </div>
    </div>
  );
}

export default App;
