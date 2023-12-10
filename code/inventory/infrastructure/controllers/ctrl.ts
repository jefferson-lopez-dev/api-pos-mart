import { Request, Response } from "express";
import { InventoryUseCase } from "../../application/use-case";

interface QueryType {
  id?: string;
}

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

  public findInventoryById = async (req: Request, res: Response) => {
    const { body, query } = req;
    const { id } = query as QueryType;

    if (id !== undefined || id !== "") {
      const Inventory = await this.useCase.useFindById(String(id));
      return res.json(Inventory);
    }

    const Inventory = await this.useCase.useFindById(body.uuid);
    return res.json(Inventory);
  };
  public deleteInventory = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useDelete(body.uuid);
    return res.json(Inventory);
  };
}
