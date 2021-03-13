import { useEffect, useState } from "react";
import { photos, defaultMatress } from "./mattressData";
import useAppStyles from "./useAppStyles";
import Header from "./Components/Header";
import Selector from "./Components/Selector";

function App() {
  const [selectedMatress, setSelectedMatress] = useState(null);
  const [cart, setCart] = useState([]);
  const classes = useAppStyles();
  useEffect(() => setSelectedMatress(defaultMatress()), []);

  const handleSelectMatressTypeClick = (index) => {
    const selectedMatress = photos[index];
    setSelectedMatress(selectedMatress);
  };

  const handleAddToCart = () => {
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
        <Selector
          handleAddToCart={handleAddToCart}
          handleSelectMatressTypeClick={handleSelectMatressTypeClick}
          selectedMatress={selectedMatress}
        />
      </div>
    </div>
  );
}

export default App;
