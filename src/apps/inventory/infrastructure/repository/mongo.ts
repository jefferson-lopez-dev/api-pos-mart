import { Inventory } from "../../domain/entity";
import { InventoryRepository } from "../../domain/repository";
import { Inventory as InventoryModel } from "../models/inventory";

export class MongoRepository implements InventoryRepository {
  async findById(uuid: string, create_by: string): Promise<any> {
    const inventory = await InventoryModel.findOne({ uuid });
    if (inventory?.create_by !== create_by) {
      return {
        status: 401,
        message: "Unauthorized access",
        inventory: null,
      };
    }
    return {
      inventory,
      status: 204,
      message: "Complete search inventory.",
    };
  }
  findAll(create_by: string): Promise<any> {
    const inventory = InventoryModel.paginate({ create_by });
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
