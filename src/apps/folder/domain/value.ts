import { FolderEntity, Folder } from "./entity";
import { v4 as uuid } from "uuid";

export class FolderValue implements FolderEntity {
  uuid: string;
  name: string;
  description: string;
  creation_date: number;
  create_by: string;
  inventory_id: string;

  constructor({ name, description, create_by, inventory_id }: Folder) {
    this.uuid = uuid();
    this.name = name;
    this.description = description;
    this.creation_date = Date.now();
    this.inventory_id = inventory_id;
    this.create_by = create_by;
  }
}
