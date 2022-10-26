import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext/UserContext";

const Checkout = () => {
  const { user } = useContext(AuthContext);

  const checkout = useLoaderData();
  const { title, price, id } = checkout;
  return (
    <div className="lg:w-1/2 lg:h-96 md:w-1/2 mx-8 sm:mx-8 lg:mx-auto md:mx-auto  my-16 p-4  flex items-center justify-center border rounded-xl">
      <div>
        <div>
          <h1 className="text-lg  font-medium mb-4 underline">
            Successfully Checkout
          </h1>
          <p className="mb-2 text-base">
            <span className="font-bold"> Course Id:</span> {id}
          </p>
          <p className="my-2">
            <span className="font-bold ">Email:</span> {user?.email}
          </p>

          <h2 className="text-xl font-bold mb-2">
            {" "}
            Course Name: <span className="text-xl text-[#f23276]">{title}</span>
          </h2>
        </div>
        <hr className="my-4" />
        <div>
          <p>
            <span className="font-bold text-lg">Total Price:</span> {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
