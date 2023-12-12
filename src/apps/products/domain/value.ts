import { ProductEntity, Product } from "./entity";
import { v4 as uuid } from "uuid";

export class ProductValue implements ProductEntity {
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
  inventory_id: string;
  folder_id: string;
  create_by: string;
  creation_date: number;

  constructor(p: Product) {
    this.uuid = uuid();
    this.name = p.name;
    this.description = p.description;
    this.code = p.code;
    this.quantity = p.quantity;
    this.initial_cost = p.initial_cost;
    this.base_price = p.base_price;
    this.taxes = p.taxes;
    this.final_price = p.final_price;
    this.category = p.category;
    this.picture = p.picture;
    this.folder_id = p.folder_id;
    this.inventory_id = p.inventory_id;
    this.create_by = p.create_by;
    this.creation_date = Date.now();
  }
}
