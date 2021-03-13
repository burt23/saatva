import React from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";
import { photos } from "../mattressData";
import clsx from "clsx";

const useStyles = makeStyles({
  selector: {
    padding: "1rem",
  },
  title: {
    fontFamily: `'Source Serif Pro', serif`,
  },
  body: {
    fontFamily: `'Questrial', sans-serif`,
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    wordWrap: "wrap",
    padding: "0.5rem 0 1rem 0",
  },
  button: {
    background: "#fff",
    borderRadius: `0 !important`,
    border: `1px solid #bbb`,
    padding: "1rem 2rem",
    textTransform: "none",
    width: "33%",
    fontFamily: `'Questrial', sans-serif`,
    color: "#444",
  },
  selected: {
    background: "#a6a19a",
    color: "#fff",
  },
  addToCart: {
    background: "#d4aa63",
    borderRadius: 0,
    fontFamily: `'Questrial', sans-serif`,
    textTransform: "none",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "3rem",
  },
});

const Selector = ({
  handleAddToCart,
  selectedMatress,
  handleSelectMatressTypeClick,
}) => {
  const classes = useStyles();
  return (
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
            key={photo.name}
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
        data-testid="addToCartButton"
        onClick={handleAddToCart}
        className={classes.addToCart}
        fullWidth
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default Selector;
