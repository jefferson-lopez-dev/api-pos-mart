import { Inventory } from "../../domain/entity";
import { InventoryRepository } from "../../domain/repository";
import { Inventory as InventoryModel } from "../models/inventory";

export class MongoRepository implements InventoryRepository {
  findById(uuid: string): Promise<any> {
    const inventory = InventoryModel.findOne({ uuid });
    return inventory;
  }
  findAll(create_by: string): Promise<any> {
    const inventory = InventoryModel.find({ create_by });
    return inventory;
  }
  create(Inventory: Inventory): Promise<any> {
    const inventory = InventoryModel.create(Inventory);
    return inventory;
  }
  update(Inventory: Inventory, uuid: string): Promise<any> {
    const inventory = InventoryModel.findOneAndUpdate(
      { uuid: uuid },
      Inventory
    );
    return inventory;
  }
  delete(uuid: string): Promise<any> {
    const inventory = InventoryModel.findOneAndDelete({ uuid });
    return inventory;
  }
}
