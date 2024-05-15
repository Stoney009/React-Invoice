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
import GeneralProvider from "./context/GeneralProvider";

const App = () => {
  

  
  return (
    <GeneralProvider>
      <main className="flex flex-col min-h-screen :">
        <Header>
          <Container>
            <MainHeading> Invoice app</MainHeading>
            <SubHeading>MMS solution</SubHeading>
          </Container>
        </Header>
        <Container>
          <CheckOutForm   />
          <CheckOutItemList
            
          />
        </Container>

        <Footer/>
        <Drawer
          
          
          
          
        ></Drawer>
        <Toaster position="bottom-left" reverseOrder={false} />
      </main>
    </GeneralProvider>
  );
};

export default App;
