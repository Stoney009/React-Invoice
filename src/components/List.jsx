import React from "react";
import { Table, Button } from "flowbite-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const List = ({ item, deleteItem, updateQuantity, products }) => {
  const handlePlus = () => {
    updateQuantity(item.id, 1);
  };
  const handleMInus = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, -1);
    } else {
      toast.error("U can't reduce from this quantity", { duration: 500 });
    }
  };
  const handleDelBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(item.id);
      }
    });
    // if (confirm("Are you sure to delete")) {
    //   deleteItem(item.id);
    // }
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.product.title}
      </Table.Cell>
      <Table.Cell className="text-end">{item.product.price}</Table.Cell>
      <Table.Cell className="text-end">
        <div className="flex gap-5 items-center justify-end ">
          <Button
            onClick={handleMInus}
            color="dark"
            className="w-5 h-5 rounded-full items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 items-center"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </Button>
          <span>{item.quantity}</span>
          <Button
            onClick={handlePlus}
            color="dark"
            className="w-5 h-5 rounded-full items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 items-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Button>
        </div>
      </Table.Cell>
      <Table.Cell className="text-end">$ {item.cost}</Table.Cell>
      <Table.Cell className="flex justify-end items-center">
        <Button
          onClick={handleDelBtn}
          color="dark"
          className="w-8 h-8 items-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 items-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default List;
