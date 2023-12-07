import { InventoryEntity } from "./entity";
import { Inventory } from "./entity";

export interface InventoryRepository {
  findInventoryById(uuid: string): Promise<InventoryEntity | null>;
  createInventory(Inventory: Inventory): Promise<InventoryEntity | null>;
  updateInventory(
    Inventory: Inventory,
    uuid: string
  ): Promise<InventoryEntity | null>;
  deleteInventory(uuid: string): Promise<InventoryEntity | null>;
}
