export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]); //colors is Array of Arrays. Hence unique.flat is used to flatten them
  if (type === "colors") {
    unique = unique.flat(); //This returns a single array with unique values for colors like the rest of types
  }

  return ["all", ...new Set(unique)];
};
