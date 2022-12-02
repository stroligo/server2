import { Schema, Model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    orders: [{ type: String }],
  },
  { timestamps: true }
);

const ProductModel = Model("Product", productSchema);

export default ProductModel;
