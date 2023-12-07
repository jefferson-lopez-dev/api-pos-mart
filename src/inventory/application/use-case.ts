import { InventoryRepository } from "../domain/repository";
import { Inventory } from "../domain/entity";
import { InventoryValue } from "../domain/value";

export class InventoryUseCase {
  constructor(private readonly Inventory: InventoryRepository) {}

  public createInventory = async (data: Inventory) => {
    const invValue = new InventoryValue(data);
    const invCreated = await this.Inventory.createInventory(invValue);
    return invCreated;
  };
  // public updateInventory = async () => {};
  // public deleteInventory = async () => {};
}
