/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const Product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    // pass the product information to the addToBasket function
    // we dispatch here and action.payload will catch this product and store it
    dispatch(addToBasket(Product));
  };

  return (
    <div className=" relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400 ">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" alt="" />
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500 " />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2 ">{description} </p>
      <div className="mb-5  ">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2  -mt-5">
          <img
            className=" w-12 "
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="text-xs text-gray-500"> FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className=" mt-auto button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
