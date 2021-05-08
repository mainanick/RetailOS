import React, { useState } from "react";
import Modal from "react-modal";

const products = [
  { name: "DS115" },
  { name: "DS118" },
  { name: "DS115" },
  { name: "MAX767" },
  { name: "E115" },
  { name: "DS115" },
  { name: "MAX767" },
  { name: "Eop5" },
  { name: "DS115" },
  { name: "MAX767" },
  { name: "Edfj5" },
  { name: "DS115" },
  { name: "MAX767" },
  { name: "E745" },
  { name: "dfsdfg767" },
  { name: "E745" },
  { name: "dfgdfg67" },
  { name: "54kjhk" },
];

function renderProducts(products) {
  return products.map(
    (p) => (
      <div className="w-2/12 max-w-2/12 m-2 h-100px bg-white p-2 flex items-center justify-center">
        <p>{p.name}</p>
      </div>
    ),
    products
  );
}

const cart = [
  {
    name: "DS 115",
    quantity: 2,
    price: 23000,
  },
  {
    name: "MAX 767",
    quantity: 5,
    price: 4000,
  },
];
function renderCart(cart) {
  return cart.map((p) => (
    <div className="flex border-b p-2 items-center">
      <div className="flex justify-center items-center rounded-full w-40px h-40px border">
        {p.quantity}
      </div>
      <div className="ml-4 w-full px-4">
        <div className="flex justify-between">
          <p className="text-lg">{p.name} </p>
          <p className="text-lg">{p.quantity * p.price}</p>
        </div>
        <p>@ {p.price}</p>
      </div>
    </div>
  ));
}

Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.5)";
const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <React.Fragment>
      <main className="bg-neutral-20 w-full h-screen">
        <div className="flex w-full h-full">
          <div className="relative w-9/12 h-full p-2">
            <div className="flex w-full justify-center items-center mt-4">
              <input
                className="w-full py-2 px-4 rounded h-48px"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex flex-wrap content-start w-full h-full">
              {renderProducts(products)}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-60px bg-neutral-200"></div>
          </div>
          <div className="relative shadow bg-white mt-4 rounded-lg w-3/12">
            <p className="cursor-pointer text-xl m-4">Cart</p>
            <div className="">{renderCart(cart)}</div>
            <div className="absolute bottom-24px left-0 w-full px-4">
              <p>Total: 23000</p>
              <button
                onClick={openModal}
                className="flex w-full bg-green-300 text-white cursor-pointer h-48px rounded-md items-center justify-center mb-2"
              >
                Complete Order
              </button>
              <button className="flex w-full border border-blue-200 text-blue-200 h-48px rounded-md items-center justify-center mb-2">
                Save
              </button>
              <button className="flex w-full border border-red-100 text-red-100 h-48px rounded-md items-center justify-center mb-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        contentLabel="Payment Dialog"
      >
        <button onClick={closeModal}>Close</button>
        <div>I am a modal</div>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </Modal>
    </React.Fragment>
  );
}
