import React from "react";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import { Button } from "flowbite-react";
import CreateProductForm from "./CreateProductForm";

const Drawer = ({ isDrawerOpen, handleDrawer, products }) => {
  return (
    <div
      className={`fixed z-20 p-4 bg-neutral-100 shadow-sm  w-[40%] duration-200 ease-in-out h-screen right-0 top-0 flex flex-col ${
        isDrawerOpen && "translate-x-full"
      } `}
    >
      <div className=" flex justify-between">
        <div className="">
          <MainHeading> Your Product</MainHeading>
          <SubHeading>Manage Product</SubHeading>
        </div>
        <Button
          color="dark"
          onClick={handleDrawer}
          className="rounded-full w-7 items-center h-7"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 pointer-events-none "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>
      <div className=" ">
        {products.map(({ title, price, stock,id}) => (
          <div key={id} className="border border-gray-500 flex justify-between p-2 mb-3 shadow-md rounded-md">
            <p>{title} <span className="text-sm text-gray-600">({stock})</span></p>
            <p>{price}</p>
          </div>
        ))}
      </div>
      <CreateProductForm></CreateProductForm>
    </div>
  );
};

export default Drawer;
