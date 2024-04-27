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

const App = () => {
  const [products, setProduct] = useState([
    { id: 1, title: "Apple", price: 1.5, stock: 100 },
    { id: 2, title: "Banana", price: 0.75, stock: 150 },
    { id: 3, title: "Orange", price: 1.0, stock: 120 },
    { id: 4, title: "Grapes", price: 2.0, stock: 80 },
    { id: 5, title: "Strawberry", price: 3.5, stock: 90 },
  ]);
  const [isDrawerOpen, setDrawerOpen] = useState(true);

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
        <CheckOutForm products={products} />
        <CheckOutItemList />
      </Container>

      <Footer>
        <Container>
          <div className="flex justify-end gap-5 items-center">
            <Button color="dark" onClick={handleDrawer}>Manage Inventory</Button>
            <Button color="light">Print</Button>
          </div>
        </Container>
      </Footer>
      <Drawer isDrawerOpen={isDrawerOpen} handleDrawer={handleDrawer} products={products}></Drawer>
    </main>
  );
};

export default App;
