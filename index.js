import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";

dotenv.config();

connect();
const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server up in: ${process.env.PORT}`);
});
