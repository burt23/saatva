import { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";
import { photos, defaultMatress } from "./mattressData";
import useAppStyles from "./useAppStyles";
import Header from "./Components/Header";

function App() {
  const [selectedMatress, setSelectedMatress] = useState(null);
  const [cart, setCart] = useState([]);
  const classes = useAppStyles();
  useEffect(() => setSelectedMatress(defaultMatress()), []);

  const handleSelectMatressTypeClick = (index) => {
    const selectedMatress = photos[index];
    setSelectedMatress(selectedMatress);
  };

  const handleAddToCart = (index) => {
    const updatedCart = [...cart, selectedMatress];
    setCart(updatedCart);
  };
  return (
    <div className={classes.root}>
      <Header cart={cart} />
      <div className={classes.content}>
        <div className={classes.imgWrapper}>
          {selectedMatress && (
            <img
              alt={selectedMatress.name}
              src={selectedMatress.img}
              className={classes.img}
            />
          )}
        </div>
        <div className={classes.selector}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Choose Your Mattress
          </Typography>
          <Typography variant="body1" className={classes.body}>
            SELECT MATTRESS TYPE
          </Typography>
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
            <Typography variant="body1" className={classes.body}>
              {selectedMatress && selectedMatress.name}
            </Typography>
            <Typography variant="body1" className={classes.body}>
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
  );
}

export default App;
