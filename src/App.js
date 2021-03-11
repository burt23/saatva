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
    // overflow: "auto",
    justifyItems: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "80vw",
  },
  header: {
    background: "#fff",
    position: "relative",
    width: "80vw",
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
  button: {
    background: "#d4aa63",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height: "90vh",
    position: "relative",
  },
  img: {
    flex: "3 1 auto",
    minWidth: "375px",
    position: "relative",
  },
  selector: {
    flex: "2 1 auto",
    minWidth: "300px",
    justifySelf: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <div className={classes.headerWrapper}>
            <div className={classes.headerItem}>hello</div>
            <div className={classes.headerItem} />
            <div className={classes.headerItem}>world</div>
          </div>
        </header>
        <div className={classes.content}>
          <div className={classes.img}>img</div>
          <div className={classes.selector}>selector</div>
        </div>
      </div>
    </div>
  );
}

export default App;
