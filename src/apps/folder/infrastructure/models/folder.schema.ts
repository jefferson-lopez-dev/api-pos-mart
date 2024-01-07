import { Schema, model, PaginateModel } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { FolderEntity } from ".././../domain/entity";

interface FolderDocument extends Document, FolderEntity {}

const FolderSchema = new Schema(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
    inventory_id: { type: String, required: true },
  },
  { timestamps: true }
);

FolderSchema.plugin(mongoosePaginate);

const FolderModel = model<FolderDocument, PaginateModel<FolderDocument>>(
  "Folder",
  FolderSchema
);

export { FolderModel };
