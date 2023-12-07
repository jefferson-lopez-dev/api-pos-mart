import { Request, Response } from "express";
import { InventoryUseCase } from "../../application/use-case";

export class InventoryController {
  constructor(private useCase: InventoryUseCase) {}
  public createInventory = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useCreate(body);
    return res.json(Inventory);
  };
  public updateInventory = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useUpdate(body, body.uuid);
    return res.json(Inventory);
  };
  public findInventoryById = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useFindById(body.uuid);
    return res.json(Inventory);
  };
  public deleteInventory = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useDelete(body.uuid);
    return res.json(Inventory);
  };
}
