const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
  const { shipping_fee, total_amount } = JSON.parse(event.body);

  const calculateOrderAmount = () => {
    return shipping_fee + total_amount;
  };
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      description: "Ecommerce Payment",
      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
      amount: calculateOrderAmount(),
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
