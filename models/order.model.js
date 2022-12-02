import { Schema, Model } from "mongoose";

const orderSchema = new Schema(
  {
    products: { type: String, required: true },
    price: { type: Number, required: true },
    orders: [{ type: String }],
  },
  { timestamps: true }
);

const ProductModel = model("Product", orderSchema);

export default ProductModel;
