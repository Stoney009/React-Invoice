import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralProvider";
import Container from "./Container";
import { Button } from "flowbite-react";

const Footer = () => {
  const { handleDrawer } = useContext(GeneralContext);
  return (
    <footer className="mt-auto mb-3">
      <Container>
        <div className="flex justify-end gap-5 items-center">
          <Button color="dark" onClick={handleDrawer}>
            Manage Inventory
          </Button>
          <Button color="light">Print</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
