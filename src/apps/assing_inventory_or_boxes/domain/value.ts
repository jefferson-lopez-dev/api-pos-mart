import { AssingIB, AssingIBEntity } from "./entity";
import { v4 as uuid } from "uuid";

export class AssingIBValue implements AssingIBEntity {
  uuid: string;
  name_box: string;
  name_inventory: string;
  inventory_id: string;
  box_id: string;
  creation_date: number;
  create_by: string;

  constructor({
    name_box,
    name_inventory,
    box_id,
    create_by,
    inventory_id,
  }: AssingIB) {
    this.uuid = uuid();
    this.name_box = name_box;
    this.name_inventory = name_inventory;
    this.creation_date = Date.now();
    this.inventory_id = inventory_id;
    this.box_id = box_id;
    this.create_by = create_by;
  }
}
