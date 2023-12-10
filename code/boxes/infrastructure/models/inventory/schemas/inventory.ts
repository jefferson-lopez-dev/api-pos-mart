import { Schema, model } from "mongoose";
import { InventoryType } from "../__types";

const InventorySchema = new Schema<InventoryType>(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
  },
  { timestamps: true }
);

const Inventory = model<InventoryType>("Inventory", InventorySchema);

export { Inventory };
