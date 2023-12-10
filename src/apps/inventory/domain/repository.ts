import { InventoryEntity } from "./entity";
import { Inventory } from "./entity";

export interface InventoryRepository {
  findAll(create_by: string): Promise<InventoryEntity | null>;
  findById(uuid: string): Promise<InventoryEntity | null>;
  create(Inventory: Inventory): Promise<InventoryEntity | null>;
  update(Inventory: Inventory, uuid: string): Promise<InventoryEntity | null>;
  delete(uuid: string): Promise<InventoryEntity | null>;
}
