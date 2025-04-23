const express = require("express");
const router = express.Router();
const groceryItems = [
  {
    id: 1,
    title: "Apple",
    description: "Fresh red apples",
    img: "",
    price: 1.99,
  },
  {
    id: 2,
    title: "Banana",
    description: "Ripe yellow bananas",
    img: "",
    price: 0.99,
  },
  {
    id: 3,
    title: "Carrot",
    description: "Organic carrots",
    img: "",
    price: 1.29,
  },
  { id: 4, title: "Milk", description: "1L whole milk", img: "", price: 2.49 },
  {
    id: 5,
    title: "Eggs",
    description: "12-pack farm eggs",
    img: "",
    price: 3.19,
  },
  {
    id: 6,
    title: "Bread",
    description: "Whole grain bread loaf",
    img: "",
    price: 2.79,
  },
  {
    id: 7,
    title: "Cheese",
    description: "Cheddar cheese block",
    img: "",
    price: 4.49,
  },
  {
    id: 8,
    title: "Chicken Breast",
    description: "Boneless skinless chicken",
    img: "",
    price: 6.99,
  },
  {
    id: 9,
    title: "Rice",
    description: "1kg basmati rice",
    img: "",
    price: 3.99,
  },
  {
    id: 10,
    title: "Pasta",
    description: "500g spaghetti",
    img: "",
    price: 1.89,
  },
  {
    id: 11,
    title: "Tomato",
    description: "Fresh tomatoes",
    img: "",
    price: 2.59,
  },
  {
    id: 12,
    title: "Onion",
    description: "Yellow onions",
    img: "",
    price: 1.49,
  },
  {
    id: 13,
    title: "Potato",
    description: "Starchy potatoes",
    img: "",
    price: 2.39,
  },
  {
    id: 14,
    title: "Orange Juice",
    description: "1L orange juice",
    img: "",
    price: 3.29,
  },
  {
    id: 15,
    title: "Yogurt",
    description: "Plain Greek yogurt",
    img: "",
    price: 2.99,
  },
  {
    id: 16,
    title: "Butter",
    description: "Salted butter stick",
    img: "",
    price: 2.49,
  },
  {
    id: 17,
    title: "Cucumber",
    description: "Fresh cucumbers",
    img: "",
    price: 1.19,
  },
  {
    id: 18,
    title: "Lettuce",
    description: "Crispy green lettuce",
    img: "",
    price: 1.89,
  },
  {
    id: 19,
    title: "Bell Pepper",
    description: "Red bell peppers",
    img: "",
    price: 2.79,
  },
  {
    id: 20,
    title: "Strawberries",
    description: "Fresh strawberries pack",
    img: "",
    price: 4.59,
  },
];

router.get("/", (req, res) => {
  res.send(groceryItems);
});

router.get("/:getbyId", (req, res) => {
  const item = groceryItems.filter(
    (i) => i.id === parseInt(req.params.getbyId)
  );
  console.log(item);
  if (item.length > 0) {
    res.send(item);
  } else {
    res.send("No product Found");
  }
});
module.exports = router;
