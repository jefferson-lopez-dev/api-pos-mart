import { Schema, model } from "mongoose";
import { FolderType } from "../__types";

const FolderSchema = new Schema<FolderType>(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
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

const FolderModel = model<FolderType>("Folder", FolderSchema);

export { FolderModel };
