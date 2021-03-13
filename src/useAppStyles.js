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
  title: {
    fontFamily: `'Source Serif Pro', serif`,
  },
  body: {
    fontFamily: `'Questrial', sans-serif`,
  },
  addToCart: {
    background: "#d4aa63",
    borderRadius: 0,
    fontFamily: `'Questrial', sans-serif`,
    textTransform: "none",
  },
  button: {
    background: "#fff",
    borderRadius: `0 !important`,
    border: `1px solid #bbb`,
    padding: "1rem 2rem",
    textTransform: "none",
    width: "33%",
    color: "#444",
    // "@hover": {
    //   background: "#a6a19a", TODO
    // },
  },
  selected: {
    background: "#a6a19a",
    color: "#fff",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    wordWrap: "wrap",
    padding: "0.5rem 0 1rem 0",
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
  selector: {
    padding: "1rem",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default useAppStyles;
