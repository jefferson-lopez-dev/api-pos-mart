import { Schema, model } from "mongoose";
import { ProductsType } from "../__types";

const ProductSchema = new Schema<ProductsType>(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    code: { type: String, required: true },
    quantity: { type: Number, required: true },
    initial_cost: { type: Number, required: true },
    base_price: { type: Number, required: true },
    taxes: { type: String, required: true },
    final_price: { type: Number, required: true },
    category: { type: String },
    picture: {
      url: { type: String },
      public_id: { type: String },
    },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
    belongs: [
      {
        name: { type: String, required: true },
        id: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const ProductModel = model<ProductsType>("Product", ProductSchema);

export { ProductModel };
