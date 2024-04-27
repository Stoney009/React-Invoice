import { Select, Label, TextInput, Button } from "flowbite-react";
import React from "react";
import Container from "./Container";

const CheckOutForm = ({ products }) => {
  return (
    <>
      <Container>
        <form className="mb-3">
          <div className="grid grid-cols-5 gap-5 items-center">
            <div className="max-w-md col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select Product" />
              </div>
              <Select id="countries" required>
                {products.map(({ id, title }) => (
                  <option value={id} key={id} >
                    {title}
                  </option>
                ))}
              </Select>
            </div>
            <div className="col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="base" value="Quantity" />
              </div>
              <TextInput required id="base" type="number" sizing="md" />
            </div>
            <div className="col-span-1 w-full h-full">
              <Button color="dark" className="w-full h-full items-center">Buy Now</Button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default CheckOutForm;
