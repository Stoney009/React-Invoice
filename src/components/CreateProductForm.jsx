import React from "react";
import SubHeading from "./SubHeading";
import { Label, TextInput, Button } from "flowbite-react";
const CreateProductForm = () => {
  return (
    <div>
      <SubHeading>Add New Product</SubHeading>
      <form>
        <div className=" mb-2">
          <div className="mb-2">
            <div className="mb-1 block">
              <Label htmlFor="name" value="Product Name" />
            </div>
            <TextInput id="name" type="text" placeholder="" required shadow />
          </div>
          <div className="flex justify-between gap-2 ">
            <div className="flex-grow">
              <div className="mb-1 block">
                <Label htmlFor="price" value="Price" />
              </div>
              <TextInput id="price" type="number" required shadow />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="stock" value="Stock" />
              </div>
              <TextInput id="stock" type="number" required shadow />
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
