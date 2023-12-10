import { InventoryRepository } from "../domain/repository";
import { Inventory } from "../domain/entity";
import { InventoryValue } from "../domain/value";

export class InventoryUseCase {
  constructor(private readonly Inventory: InventoryRepository) {}

  public useCreate = async (data: Inventory) => {
    const invValue = new InventoryValue(data);
    const invCreated = await this.Inventory.create(invValue);
    return invCreated;
  };
  public useUpdate = async (data: Inventory, uuid: string) => {
    const invCreated = await this.Inventory.update(data, uuid);
    return invCreated;
  };
  public useFindById = async (uuid: string) => {
    const invCreated = await this.Inventory.findById(uuid);
    return invCreated;
  };
  public useDelete = async (uuid: string) => {
    const invCreated = await this.Inventory.delete(uuid);
    return invCreated;
  };
}
