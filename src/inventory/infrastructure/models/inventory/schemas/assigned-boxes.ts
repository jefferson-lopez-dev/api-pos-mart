import { Schema, model } from "mongoose";

const AssignedBoxesSchema = new Schema(
  {
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
    assignment: {
      name: { type: String, required: true },
      id: { type: String, required: true },
    },
    belongs: [
      {
        name: { type: String, required: true },
        id: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const AssignedBoxesModel = model("AssignedBoxes", AssignedBoxesSchema);

export { AssignedBoxesModel };
