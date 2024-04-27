import React from "react";
import { Table } from "flowbite-react";
import List from "./List";

const CheckOutItemList = ({ items,deleteItem,updateQuantity}) => {
  return (
    <div className="overflow-x-auto">
      <Table className="item-center">
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className="text-end">Price</Table.HeadCell>
          <Table.HeadCell className="text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className="text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <List key={item.id} item={item}  updateQuantity={updateQuantity} deleteItem={deleteItem} />
          ))}
          {items.length === 0 && (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                colSpan="5"
                className="whitespace-nowrap text-xl  text-center font-medium text-gray-900 dark:text-white"
              >
                There is no record
              </Table.Cell>
            </Table.Row>
          )}
          <Table.Row>
            <Table.Cell
              colSpan="3"
              className="text-end text-black  text-xl"
            >
              Total
            </Table.Cell>
            <Table.Cell colSpan="" className="text-end text-xl">
              {items.reduce((pv, cv) => pv + parseFloat(cv.cost),0).toFixed(2)}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

("use client");

export default CheckOutItemList;
