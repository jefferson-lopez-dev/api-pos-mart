import { Schema, model } from "mongoose";
import { SalesType } from "../__types";

const SalesSchema = new Schema<SalesType>(
  {
    uuid: { type: String, required: true },
    product_id: { type: String, required: true },
    quantity: { type: Number, required: true },
    total_price: { type: Number, required: true },
    sale_date: { type: Date, required: true },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    payment_method: { type: String, required: true },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
    belongs: [
      {
        name: { type: String, required: true },
        id: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Sales = model<SalesType>("Sales", SalesSchema);

export { Sales };
