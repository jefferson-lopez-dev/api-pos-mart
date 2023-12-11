import { Document, Schema, model, PaginateModel } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

interface Inventory {
  uuid: string;
  name: string;
  description: string;
  create_by: string;
  creation_date: number;
}

interface InventoryDocument extends Document, Inventory {}

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

InventorySchema.plugin(mongoosePaginate);

const Inventory = model<InventoryDocument, PaginateModel<InventoryDocument>>(
  "Inventory",
  InventorySchema
);

export { Inventory };
