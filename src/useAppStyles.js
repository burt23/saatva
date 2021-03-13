import { makeStyles } from "@material-ui/core";

const useAppStyles = makeStyles({
  root: {
    background: "#f6f5f3",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
  },
  imgWrapper: {
    position: "relative",
  },
  img: {
    width: "100%",
    maxWidth: "600px",
  },
});

export default useAppStyles;
