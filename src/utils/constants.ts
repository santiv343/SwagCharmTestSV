export const buttonNames : string[] = [
  "All products",
  "Packaging",
  "Drinkware",
  "Apparel",
  "Notebooks",
  "Backpacks",
];

export type ProductType = {
  isPack: boolean;
  img: string;
  id: number;
  stockAvaliable: number;
  title: string;
  quantity: number;
  price: number;
  details: any;
};

export type ProductsType = ProductType[];

export const initialProducts: ProductsType = [
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

export const featuredProducts: {
  title: string;
  priceRange: string;
  minimum: number;
}[] = [
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

export const infoColumns: { title: string; links: string[] }[] = [
  {
    title: "Our company",
    links: ["About us", "FAQ", "Partnerships", "Sustainability", "Blog"],
  },
  {
    title: "How can we help",
    links: ["Place a ticket", "Track your order", "Help center"],
  },
  {
    title: "Information",
    links: ["Contact us", "Live chat", "Privacy", "Terms of use"],
  },
];
