import { Inventory, InventoryEntity } from "./entity";
import { v4 as uuid } from "uuid";

export class InventoryValue implements InventoryEntity {
  uuid: string;
  name: string;
  description: string;
  creation_date: number;
  create_by: string;

  constructor({ name, description, create_by }: Inventory) {
    this.uuid = uuid();
    this.name = name;
    this.description = description;
    this.creation_date = Date.now();
    this.create_by = create_by;
  }
}
