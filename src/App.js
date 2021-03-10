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
  },
  button: {
    background: "#d4aa63",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>hello</header>
    </div>
  );
}

export default App;
