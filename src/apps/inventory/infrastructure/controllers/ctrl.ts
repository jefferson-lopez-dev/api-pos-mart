import { Request, Response } from "express";
import { InventoryUseCase } from "../../app/use-case";

interface ReqTypes {
  id?: string;
  create_by?: string;
  uuid?: string;
}

export class InventoryController {
  constructor(private useCase: InventoryUseCase) {}
  public findInventoryById = async (req: Request, res: Response) => {
    const { body, query } = req;
    const { id, create_by } = query as ReqTypes;

    if (id !== undefined || id !== "") {
      const Inventory = await this.useCase.useFindById(
        String(id),
        String(create_by)
      );
      return res.json(Inventory);
    }

    const Inventory = await this.useCase.useFindById(body.uuid, body.create_by);
    return res.json(Inventory);
  };

  public findAllInventories = async (req: Request, res: Response) => {
    const { body } = req;

    const Inventory = await this.useCase.useFindAll(body.create_by);
    return res.json(Inventory);
  };

  public createInventory = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useCreate(body);
    return res.json({
      status: 204,
      message: "New Inventory was created successfully",
      Inventory,
    });
  };

  public updateInventory = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useUpdate(body, body.uuid);
    return res.json(Inventory);
  };

  public deleteInventory = async ({ params }: Request, res: Response) => {
    const Inventory = await this.useCase.useDelete(params.uuid);
    return res.json(Inventory);
  };
}
