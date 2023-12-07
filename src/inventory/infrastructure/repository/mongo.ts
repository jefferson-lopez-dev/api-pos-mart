import { Inventory } from "../../domain/entity";
import { InventoryRepository } from "../../domain/repository";
import { Inventory as InventoryModel } from "../models";

export class MongoRepository implements InventoryRepository {
  findInventoryById(uuid: string): Promise<any> {
    const inventory = InventoryModel.findOne({ uuid });
    return inventory;
  }
  createInventory(Inventory: Inventory): Promise<any> {
    const inventory = InventoryModel.create(Inventory);
    return inventory;
  }
  updateInventory(Inventory: Inventory, uuid: string): Promise<any> {
    const inventory = InventoryModel.findOneAndUpdate({ uuid }, Inventory);
    return inventory;
  }
  deleteInventory(uuid: string): Promise<any> {
    const inventory = InventoryModel.findOneAndDelete({ uuid });
    return inventory;
  }
}
