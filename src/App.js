import { useEffect, useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import classic from "./images/classic-carousel.jpg";
import loom from "./images/loom-carousel.jpg";
import zen from "./images/zen-carousel.jpg";
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
  addToCart: {
    background: "#d4aa63",
  },
  button: {
    background: "#fff",
    borderRadius: `0 !important`,
    border: `1px solid #a6a19a`,
    padding: "0.5rem 2.5rem",
    textTransform: "none",
    // "@hover": {
    //   background: "#a6a19a",
    // },
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    // height: "90vh",
    position: "relative",
  },
  img: {
    flex: "3 1 auto",
    // minWidth: "30rem",
    position: "relative",
  },
  selector: {
    flex: "2 1 auto",
    // minWidth: "300px",
    justifySelf: "center",
  },
});
const photos = [
  {
    name: "Saatva Classic",
    img: classic,
    price: `$1,299`,
    index: 0,
  },
  {
    name: "Loom & leaf",
    img: loom,
    price: `$899`,
    index: 1,
  },
  {
    name: "Zenhaven",
    img: zen,
    price: `$1,499`,
    index: 2,
  },
];

const defaultMatress = () => photos[0];

function App() {
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedMatress, setSelectedMatress] = useState(null);
  const classes = useStyles();
  useEffect(() => setSelectedMatress(defaultMatress()), []);
  const handleSelectMatressTypeClick = (index) => {
    setSelectedMatress(photos[index]);
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <div className={classes.headerWrapper}>
            {/* {photos.map((photo) => (
              <img src={photo.img} />
            ))} */}
            <div className={classes.headerItem}>hello</div>
            <div className={classes.headerItem} />
            <div className={classes.headerItem}>world</div>
          </div>
        </header>
        <div className={classes.content}>
          <div className={classes.img}>
            {selectedMatress && <img src={selectedMatress.img} />}
          </div>
          <div className={classes.selector}>
            <Typography variant="h2" gutterBottom>
              Choose Your Mattress
            </Typography>
            <Typography variant="body1">SELECT MATTRESS TYPE</Typography>
            <div className={classes.buttonWrapper}>
              {photos.map((photo) => (
                <Button
                  className={classes.button}
                  onClick={() => handleSelectMatressTypeClick(photo.index)}
                >
                  {photo.name}
                </Button>
              ))}
            </div>
            <Typography variant="body1">
              {selectedMatress && selectedMatress.name}
            </Typography>
            <Button className={classes.addToCart}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
