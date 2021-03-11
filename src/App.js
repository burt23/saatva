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
    justifyItems: "center",
    alignItems: "center",
  },
  firstLevelFlexChild: {
    // background: "#d4aa63",
    flex: "0 1 auto",
    maxWidth: "80vw",
    minWidth: "80vw",
    // minHeight: "100%",
    position: "relative",
  },
  header: {
    background: "#fff",
    position: "relative",
    height: "5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // padding: "2rem 0 ",
  },
  button: {
    background: "#d4aa63",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    minHeight: "70vmin",
    position: "relative",
  },
  img: {
    flex: "3 1 auto",
    border: "10px solid gold",
    minWidth: "500px",
  },
  selector: {
    flex: "2 1 auto",
    border: "10px solid green",
    minWidth: "300px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.firstLevelFlexChild}>
        <header className={classes.header}>
          <div className={classes.headerItem}>hello</div>
          <div className={classes.headerItem} />
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
