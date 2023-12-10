import { Schema, model } from "mongoose";

const FolderSchema = new Schema(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
    inventory_id: { type: String, required: true },
  },
  { timestamps: true }
);

const FolderModel = model("Folder", FolderSchema);

export { FolderModel };
