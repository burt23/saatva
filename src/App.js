import { useEffect, useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import classic from "./images/classic-carousel.jpg";
import loom from "./images/loom-carousel.jpg";
import zen from "./images/zen-carousel.jpg";
import "./App.css";
import logo from "./images/logo.png";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
    maxWidth: "1200px",
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
    borderRadius: "none",
    textTransform: "none",
  },
  button: {
    background: "#fff",
    borderRadius: `0 !important`,
    border: `1px solid #bbb`,
    padding: "0.5rem 2.5rem",
    textTransform: "none",
    width: "33%",
    color: "#444",
    // "@hover": {
    //   background: "#a6a19a",
    // },
  },
  selected: {
    background: "#a6a19a",
    color: "#fff",
  },
  buttonWrapper: {
    width: "100%",
    padding: "0.5rem 0 1rem 0",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // height: "90vh",
    position: "relative",
  },
  imgWrapper: {
    flex: "3 1 auto",
    position: "relative",
  },
  img: {
    width: "100%",
    maxWidth: "600px",
  },
  selector: {
    flex: "2 1 auto",
    padding: "1rem",
    // minWidth: "300px",
    // justifySelf: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  const [cart, setCart] = useState([]);
  const classes = useStyles();
  useEffect(() => setSelectedMatress(defaultMatress()), []);

  const handleSelectMatressTypeClick = (index) => {
    const selectedMatress = photos[index];
    setSelectedMatress(selectedMatress);
  };

  const handleAddToCart = (index) => {
    const updatedCart = [...cart, selectedMatress];
    setCart(updatedCart);
  };
  console.log("render cart", cart);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <div className={classes.headerWrapper}>
            {/* {photos.map((photo) => (
              <img src={photo.img} />
            ))} */}
            <div className={classes.headerItem}>
              <img src={logo} />
            </div>
            <div className={classes.headerItem} />

            <div className={classes.headerItem}>
              <Badge badgeContent={cart.length}>
                <ShoppingCartIcon />
              </Badge>
            </div>
          </div>
        </header>
        <div className={classes.content}>
          <div className={classes.imgWrapper}>
            {selectedMatress && (
              <img src={selectedMatress.img} className={classes.img} />
            )}
          </div>
          <div className={classes.selector}>
            <Typography variant="h2" gutterBottom>
              Choose Your Mattress
            </Typography>
            <Typography variant="body1">SELECT MATTRESS TYPE</Typography>
            <div className={classes.buttonWrapper}>
              {photos.map((photo) => (
                <Button
                  className={
                    selectedMatress && selectedMatress.name === photo.name
                      ? clsx([classes.selected, classes.button])
                      : classes.button
                  }
                  onClick={() => handleSelectMatressTypeClick(photo.index)}
                >
                  {photo.name}
                </Button>
              ))}
            </div>
            <div className={classes.flexRow}>
              <Typography variant="body1">
                {selectedMatress && selectedMatress.name}
              </Typography>
              <Typography variant="body1">
                {selectedMatress && selectedMatress.price}
              </Typography>
            </div>
            <Button
              onClick={handleAddToCart}
              className={classes.addToCart}
              fullWidth
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
