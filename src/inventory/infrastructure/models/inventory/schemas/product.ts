import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
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

const ProductModel = model("Product", ProductSchema);

export { ProductModel };
