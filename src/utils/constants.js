import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "Mission",
    text: "Little India's mission is to provide customers with an easy and convenient way to purchase traditional Indian goods online",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Vision",
    text: "Our goal is to be a premier destination for customers of Indian descent and provide them with a pleasant and enjoyable shopping experience.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "History",
    text: "Little India was founded in 2004 as an online retail platform selling traditional Indian clothing, jewelry, and other cultural items. Over the years, it has grown to become the premier international marketplace for all Indian-inspired products, connecting shoppers from around the world with trusted Indian merchants.",
  },
];

//export const products_url = "https://course-api.com/react-store-products";
export const products_url = "/.netlify/functions/products";

//export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = "/.netlify/functions/single-product?id=";
