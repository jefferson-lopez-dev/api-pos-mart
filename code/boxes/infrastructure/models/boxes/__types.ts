import { Document } from "mongoose";

export interface BoxesType extends Document {
  uuid: string;
  name: string;
  description: string;
  assignment_inventory: string;
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
  box_ID: string;
  payment_method: string;
  creation_date: Date;
  create_by: string;
}
