import { Request, Response } from "express";
import { InventoryUseCase } from "../../app/use-case";

export class InventoryController {
  constructor(private useCase: InventoryUseCase) {}
  public findInventoryById = async (req: Request, res: Response) => {
    const { params } = req;

    const Inventory : any = await this.useCase.useFindById(
      params.id,
      params.create_by
    );
    return res.json(Inventory);
  };

  public findAllInventories = async (req: Request, res: Response) => {
    const { body } = req;

    const Inventory = await this.useCase.useFindAll(body.create_by);
    return res.json({
      status : 204,
      message : "Complete search inventory.",
      Inventory
    });
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
    const Inventory: any = await this.useCase.useUpdate(body, body.uuid);
    return res.json({
      status: 204,
      message: "Inventory has been updated",
      uuid: Inventory.uuid,
    });
  };

  public deleteInventory = async ({ params }: Request, res: Response) => {
    const Inventory = await this.useCase.useDelete(params.uuid);
    return res.json(Inventory);
  };
}
