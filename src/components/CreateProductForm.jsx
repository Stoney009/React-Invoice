import React, { useRef } from "react";
import SubHeading from "./SubHeading";
import { Label, TextInput, Button } from "flowbite-react";
import toast from "react-hot-toast";
const CreateProductForm = ({ addProduct }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const stockRef = useRef();
  const handleDrawerSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title: nameRef.current.value,
      price: priceRef.current.value,
      stock: stockRef.current.value,
    };
    addProduct(newProduct);
    formRef.current.reset();
    toast.success("New product added")

  };
  return (
    <div>
      <SubHeading>Add New Product</SubHeading>
      <form ref={formRef} onSubmit={handleDrawerSubmit}>
        <div className=" mb-2">
          <div className="mb-2">
            <div className="mb-1 block">
              <Label htmlFor="name" value="Product Name" />
            </div>
            <TextInput
              ref={nameRef}
              id="name"
              type="text"
              placeholder=""
              required
              shadow
            />
          </div>
          <div className="flex justify-between gap-2 ">
            <div className="flex-grow">
              <div className="mb-1 block">
                <Label htmlFor="price" value="Price" />
              </div>
              <TextInput
                ref={priceRef}
                id="price"
                type="number"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="stock" value="Stock" />
              </div>
              <TextInput
                ref={stockRef}
                id="stock"
                type="number"
                required
                shadow
              />
            </div>
          </div>
        </div>
        <Button color="dark" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default CreateProductForm;
