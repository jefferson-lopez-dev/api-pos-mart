import { Request, Response } from "express";
import { FoldersUseCase } from "../../app/useCase";

export class FolderController {
  constructor(private useCase: FoldersUseCase) {}
  public searchAllFolders = async (req: Request, res: Response) => {
    const { body } = req;
    const Inventory = await this.useCase.useSearchAllFolders(body.create_by);
    return res.json(Inventory);
  };
  public SearchInventoryFolders = async (req: Request, res: Response) => {
    const { body } = req;
    const Inventory = await this.useCase.useSearchInventoryFolders(
      body.inventory_id,
      body.create_by
    );
    return res.json(Inventory);
  };
  public SearchAFolder = async (req: Request, res: Response) => {
    const { body } = req;
    const Inventory = await this.useCase.useSearchAFolder(
      body.folder_uuid,
      body.create_by
    );
    return res.json(Inventory);
  };
  public SearchForAnInventoryFolder = async (req: Request, res: Response) => {
    const { body } = req;
    const Inventory = await this.useCase.useSearchForAnInventoryFolder(
      body.folder_uuid,
      body.create_by,
      body.inventory_id
    );
    return res.json(Inventory);
  };
  public createFolder = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useCreate(body);
    return res.json(Inventory);
  };
  public updateFolder = async ({ body }: Request, res: Response) => {
    const Inventory = await this.useCase.useUpdate(body, body.folder_uuid);
    return res.json(Inventory);
  };
  public deleteFolder = async ({ params }: Request, res: Response) => {
    const Inventory = await this.useCase.useDelete(params.folder_uuid);
    return res.json(Inventory);
  };
}
