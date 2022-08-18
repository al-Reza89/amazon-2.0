/* eslint-disable import/no-anonymous-default-export */
// backend endpoint for stripe

const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

export default async (req, res) => {
  const { items, email } = req.body;

  // const transformedItems = items.map((item) => ({
  //   description: item.description,
  //   quantity: 1,
  //   price_data: {
  //     currency: "usd",
  //     unit_amount: item.price * 100,
  //     product_data: {
  //       name: item.title,
  //       images: [item.image],
  //     },
  //   },
  // }));
  // console.log({ transformeditems: transformedItems });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: 2000,
          product_data: {
            name: "T-shirt",
            description: "Comfortable cotton t-shirt",
            images: ["https://example.com/t-shirt.png"],
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.HOST}/?success`,
    cancel_url: `${process.env.HOST}/?checkout`,
    // metadata: {
    //   email,
    //   images: JSON.stringify(items.map((item) => item.image)),
    // },
  });
  // res.redirect(303, session.url);
  res.status(200).json({ id: session.id });
};
