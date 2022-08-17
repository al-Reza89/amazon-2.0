import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";

const Checkout = () => {
  const items = useSelector(selectItems);
  console.log(items);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg: flex max-w-2xl mx-auto">
        {/* left */}
        <div className="  flex-grow m-5 shadow-sm ">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt=""
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white ">
            <h1 className=" text-3xl border-b pb-4  ">
              {items.length === 0
                ? "Your amazon Basket Is Empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct key={i} item={item} />
            ))}
          </div>
        </div>

        {/* right */}
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
