import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    try {
      const checkoutSession = await axios.post("/api/createCheckoutSession", {
        items: items,
        email: session.user.email,
      });
      await console.log({ checkoutSession: checkoutSession });
    } catch (err) {
      console.log({ err: err });
    }

    // const result = await stripe.redirectToCheckout({
    //   sessionId: checkoutSession.data.id,
    // });

    // await console.log({ result: result });

    // if (result.error) {
    //   alert(result.error.message);
    // }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg: flex flex-col max-w-2xl mx-auto">
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
        <div className="flex flex-col bg-white p-10 shadow-md ">
          {items.length > 0 && (
            <>
              <h2 className=" whitespace-nowrap font-bold ">
                Subtotal ({items.length} items ):{" "}
                <span className="fontw-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>
              <button
                onClick={createCheckoutSession}
                role="link"
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "
                } `}
              >
                {!session ? "Sign In to Checkout" : "Proceed to checkout "}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
