import { Document } from "mongoose";
import { Affiliation } from "../../types";

export interface InventoryType extends Document {
  uuid: string;
  name: string;
  description: string;
  creation_date: Date;
  create_by: string;
}

export interface AssignedBoxesType extends Document {
  uuid: string;
  name: string;
  assignment: Affiliation;
  belongs: Affiliation[];
  create_by: string;
  creation_date: Date;
}

export interface FolderType extends Document {
  uuid: string;
  name: string;
  description: string;
  belongs: Affiliation[];
  create_by: string;
  creation_date: Date;
}

export interface ProductsType extends Document {
  uuid: string;
  name: string;
  description: string;
  code: string;
  quantity: number;
  initial_cost: number;
  base_price: number;
  taxes: string;
  final_price: number;
  category: string;
  picture: {
    url: string;
    public_id: string;
  };
  belongs: Affiliation[];
  creation_date: Date;
  create_by: string;
}
