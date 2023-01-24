export const buttonNames = [
  "All products",
  "Packaging",
  "Drinkware",
  "Apparel",
  "Notebooks",
  "Backpacks",
];

export const initialProducts = [
  {
    isPack: true,
    img: "/img/products.jpg",
    id: 1,
    stockAvaliable: 80,
    title: "My Christmas Pack",
    quantity: 50,
    price: 71.2,
    details: [
      { "Cardboard box": "Container" },
      { "Unisex Short Sleeve T-Shirt": "Green, Small" },
      { "Basic bottle": "Blue" },
    ],
  },
  {
    isPack: false,
    img: "/img/products.jpg",
    id: 2,
    stockAvaliable: 20,
    title: "Basic T-shirt",
    quantity: 10,
    price: 13.5,
    details: null,
  },
  {
    isPack: false,
    img: "/img/products.jpg",
    id: 3,
    stockAvaliable: 20,
    title: "Woman bottle",
    quantity: 20,
    price: 36.5,
    details: null,
  },
];

export const featuredProducts = [
  {
    title: "Unisex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    title: "Unisex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    title: "Unisex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    title: "Unisex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
];
