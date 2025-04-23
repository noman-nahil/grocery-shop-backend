const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoute");

router.use("/products", productRoutes);

module.exports = router;
