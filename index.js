import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";

import productRoute from "./routes/product.routes.js";

dotenv.config();

connect();
const app = express();
app.use(express.json());

//app.use("/products", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server up in: ${process.env.PORT}`);
});
