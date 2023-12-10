import { Schema, model } from "mongoose";

const InventorySchema = new Schema(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
  },
  { timestamps: true }
);

const Inventory = model("Inventory", InventorySchema);

export { Inventory };
