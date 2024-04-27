import { Select, Label, TextInput, Button } from "flowbite-react";
import React, { useRef } from "react";
import Container from "./Container";

const CheckOutForm = ({ products, addItem }) => {
  const selectRef = useRef();
  const quantityRef = useRef();
  const formRef = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    // console.log(selectRef.current.value);
    // console.log(quantityRef.current.value);

    const currentProduct = products.find(
      (product) => product.id === parseInt(selectRef.current.value)
    );
    const quantity = parseInt(quantityRef.current.value);
    const cost = (currentProduct.price * quantity).toFixed(3);
    const id = Date.now();
    const newItem = {
      id,
      product: currentProduct,
      quantity,
      cost,
    };
    addItem(newItem);
    formRef.current.reset()
  };
  return (
    <>
      <Container>
        <form ref={formRef} onSubmit={handleForm} className="mb-3">
          <div className="grid grid-cols-5 gap-5 items-center">
            <div className="max-w-md col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select Product" />
              </div>
              <Select ref={selectRef} id="countries" required>
                {products.map(({ id, title }) => (
                  <option value={id} key={id}>
                    {title}
                  </option>
                ))}
              </Select>
            </div>
            <div className="col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="base" value="Quantity" />
              </div>
              <TextInput
                ref={quantityRef}
                required
                id="base"
                type="number"
                sizing="md"
              />
            </div>
            <div className="col-span-1 w-full h-full">
              <Button
                type="submit"
                color="dark"
                className="w-full h-full items-center"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default CheckOutForm;
