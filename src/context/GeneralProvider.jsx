import React, { createContext, useState } from "react";
export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [products, setProduct] = useState([
    { id: 1, title: "Apple", price: 1.5, stock: 100 },
    { id: 2, title: "Banana", price: 0.75, stock: 150 },
    { id: 3, title: "Orange", price: 1.0, stock: 120 },
    { id: 4, title: "Grapes", price: 2.0, stock: 80 },
    { id: 5, title: "Strawberry", price: 3.5, stock: 90 },
  ]);
  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  const [openDrawer, setOpenDrawer] = useState(true);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const [items, setItem] = useState([]);

  const addItem = (newItem) => {
    setItem([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, amount) => {
    setItem(
      items.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + amount;
          item.cost = parseFloat(item.quantity * item.product.price).toFixed(2);
        }
        return item;
      })
    );
  };
  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        handleDrawer,
        products,
        addProduct,
        items,
        addItem,
        deleteItem,
        updateQuantity,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
