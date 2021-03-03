import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    categories: { type: Array, required: true },
    rating: { type: Number, default: false, required: true },
    numReviews: { type: Number, default: false, required: true },
    countInStock: { type: Number, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
