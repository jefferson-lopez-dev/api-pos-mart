import { Schema, model } from "mongoose";
import { BoxesType } from "../__types";

const BoxesSchema = new Schema<BoxesType>(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    assignment: {
      name: { type: String, default: "Inventory" },
      id: { type: String },
    },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
  },
  { timestamps: true }
);

const Boxes = model<BoxesType>("Boxes", BoxesSchema);

export { Boxes };
