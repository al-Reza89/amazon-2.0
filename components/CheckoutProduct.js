/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({ item }) => {
  const { id, title, price, rating, description, catagory, image, hasPrime } =
    item;

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      catagory,
      image,
      hasPrime,
    };

    // push item into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      {/* first colomn */}
      <Image src={image} height={200} width={200} alt="" objectFit="contain" />

      {/* middle section 2,3,4 th column */}
      <div className=" col-span-3 mx-5 ">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500 " />
            ))}
        </div>
        <p className=" text-xs my-2 line-clamp-3 "> {description} </p>
        <Currency quantity={price} currency="GBP" />

        {hasPrime && (
          <div>
            <img
              loading="lazy"
              className=" w-12 "
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-sm text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* right and remove button */}

      <div className="flex flex-col space-y-2 my-auto justify-self-end ">
        <button onClick={addItemToBasket} className="button ">
          Add To Basket
        </button>
        <button onClick={removeItemFromBasket} className="button ">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
