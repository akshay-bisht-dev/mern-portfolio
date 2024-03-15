require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

require("./database/conn");
const product_routes = require("./routes/productRoutes");

app.get("/", (req, res) => {
  res.send("Welcome Server...");
});

// Middleware or to set route
app.use("/api", product_routes);

app.listen(PORT, (req, res) => {
  console.log("Server is Live...");
});
