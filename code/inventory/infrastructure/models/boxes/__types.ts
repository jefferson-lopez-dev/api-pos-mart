import { Document } from "mongoose";
import { Affiliation } from "../../types";

export interface BoxesType extends Document {
  uuid: string;
  name: string;
  description: string;
  assignment: Affiliation;
  creation_date: Date;
  create_by: string;
}

export interface SalesType extends Document {
  uuid: string;
  product_id: string;
  quantity: number;
  total_price: number;
  sale_date: Date;
  customer: {
    name: string;
    email: string;
  };
  payment_method: string;
  belongs: Affiliation[];
  creation_date: Date;
  create_by: string;
}
