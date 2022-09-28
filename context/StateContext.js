import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);
  const [login, setLogin] = useState(false);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkCart = cartItems.find((item) => item.id === product._id);

    if(checkCart) {
        setTotalPrice((prevTotal) => prevTotal + (product.price * quantity));
        setTotalQuantity((previousTotalQty) => previousTotalQty + quantity);

        const updatedCart = cartItems.map((cartProduct) => {
            if (cartProduct._id === product._id) {
                cartProduct,
                quantity = cartProduct.quantity + quantity
            }
        })

        setCartItems(updatedCart); 
    } else {
        setTotalPrice((prevTotal) => prevTotal + (product.price * quantity));
        setTotalQuantity((previousTotalQty) => previousTotalQty + quantity);

        product.quantity = quantity;

        setCartItems([...cartItems, {...product}]);
    }
    toast.success(`${qty} ${product.name} added`);
  }

  const toggleCartQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCart = cartItems.filter((item) => item._id !== id)

    if (value === 'inc') {
        setCartItems([...newCart, { ...foundProduct, quantity: foundProduct.quantity + 1}]);
        setTotalPrice((prevTotal) => prevTotal + foundProduct.price)
        setTotalQuantity((previousQty) => previousQty + 1)
    } else if(value === 'dec') {
        if (foundProduct.quantity > 1) {
            setCartItems([...newCart, { ...foundProduct, quantity: foundProduct.quantity - 1}]);
            setTotalPrice((prevTotal) => prevTotal - foundProduct.price)
            setTotalQuantity((previousQty) => previousQty - 1)
        }
    }
  }

  const onDelete = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCart = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotal) => (prevTotal - foundProduct.price) * foundProduct.quantity);
    setTotalQuantity(previousTotalQty => previousTotalQty - foundProduct.quantity);
    setCartItems(newCart)
  }

  const addQty = () => {
    setQty((previousQty) => previousQty + 1);
  };
  const remQty = () => {
    setQty((previousQty) => {
      if (previousQty - 1 < 1) {
        return 1;
      } else return (previousQty - 1);
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantity,
        setTotalQuantity,
        qty,
        addQty,
        remQty,
        onAdd,
        toggleCartQuantity,
        onDelete,
        login,
        setLogin
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useStateContext = () => useContext(Context);
