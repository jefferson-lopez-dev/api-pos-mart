import { Request, Response } from "express";
import { InventoryUseCase } from "../../application/use-case";
import { Inventory as DataBody } from "../../domain/entity";

export class InventoryController {
  constructor(private useCase: InventoryUseCase) {}
  public createInventory = async (req: Request, res: Response) => {
    const Body: DataBody = req.body;
    const Inventory = await this.useCase.createInventory(Body);
    return res.json(Inventory);
  };
}
