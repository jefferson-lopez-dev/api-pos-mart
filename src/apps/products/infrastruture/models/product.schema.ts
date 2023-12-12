import { Schema, model, PaginateModel } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { ProductEntity } from "../../domain/entity";

interface ProductDocument extends Document, ProductEntity {}

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
    inventory_id: { type: String, required: true },
    folder_id: { type: String, required: true },
  },
  { timestamps: true }
);

ProductSchema.plugin(mongoosePaginate);

const ProductModel = model<ProductDocument, PaginateModel<ProductDocument>>(
  "Product",
  ProductSchema
);

export { ProductModel };
