import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkout = useLoaderData();
  const { title, price, id } = checkout;
  return (
    <div className="lg:w-1/2 lg:h-80 md:w-1/2 mx-8 sm:mx-8 lg:mx-auto md:mx-auto border my-16 p-4  flex items-center justify-center text-center">
      <div>
        <h1 className="text-lg  font-medium mb-4 underline">
          Successfully Checkout
        </h1>
        <p className="mb-2 text-base">
          <span className="font-bold"> Course Id:</span> {id}
        </p>

        <h2 className="text-xl font-bold mb-2">
          {" "}
          Course: <span className="text-xl text-[#f23276]">{title}</span>
        </h2>
        <p>
          <span className="font-bold text-lg">Total Price:</span> {price}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
