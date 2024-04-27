import { Button } from "flowbite-react";
import React, { useState } from "react";
import Container from "./components/Container";
import MainHeading from "./components/MainHeading";
import SubHeading from "./components/SubHeading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckOutForm from "./components/CheckOutForm";
import CheckOutItemList from "./components/CheckOutItemList";
import Drawer from "./components/Drawer";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [items, setItem] = useState([]);
  const [products, setProduct] = useState([
    { id: 1, title: "Apple", price: 1.5, stock: 100 },
    { id: 2, title: "Banana", price: 0.75, stock: 150 },
    { id: 3, title: "Orange", price: 1.0, stock: 120 },
    { id: 4, title: "Grapes", price: 2.0, stock: 80 },
    { id: 5, title: "Strawberry", price: 3.5, stock: 90 },
  ]);
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const addItem = (newItem) => {
    setItem([...items, newItem]);
  };
  const addProduct=(newProduct) => {
    setProduct([...products,newProduct])
    
  }
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

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <main className="flex flex-col min-h-screen :">
      <Header>
        <Container>
          <MainHeading> Invoice app</MainHeading>
          <SubHeading>MMS solution</SubHeading>
        </Container>
      </Header>
      <Container>
        <CheckOutForm addItem={addItem} products={products} />
        <CheckOutItemList

          items={items}
          
          updateQuantity={updateQuantity}
          deleteItem={deleteItem}
        />
      </Container>

      <Footer>
        <Container>
          <div className="flex justify-end gap-5 items-center">
            <Button color="dark" onClick={handleDrawer}>
              Manage Inventory
            </Button>
            <Button color="light">Print</Button>
          </div>
        </Container>
      </Footer>
      <Drawer addProduct={addProduct}
        isDrawerOpen={isDrawerOpen}
        handleDrawer={handleDrawer}
        products={products}
      ></Drawer>
      <Toaster position="bottom-left"  reverseOrder={false} />
    </main>
  );
};

export default App;
