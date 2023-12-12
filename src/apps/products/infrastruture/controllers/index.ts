import { Request, Response } from "express";
import { ProductUseCase } from "../../app/useCase";

export class ProductControllers {
  constructor(private useCase: ProductUseCase) {}
  public searchAllProducts = async (req: Request, res: Response) => {
    const { body } = req;
    const Products = await this.useCase.useSearchAllProducts(body.create_by);
    return res.json(Products);
  };
  public searchInventoryProducts = async (req: Request, res: Response) => {
    const { body } = req;
    const Products = await this.useCase.useSearchInventoryProducts(
      body.create_by,
      body.inventory_id
    );
    return res.json(Products);
  };
  public searchFolderProducts = async (req: Request, res: Response) => {
    const { body } = req;
    const Products = await this.useCase.useSearchFolderProducts(
      body.folder_uuid,
      body.create_by
    );
    return res.json(Products);
  };
  public searchAProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const Products = await this.useCase.useSearchAProduct(
      body.product_uuid,
      body.create_by
    );
    return res.json(Products);
  };
  public createProduct = async ({ body }: Request, res: Response) => {
    const Product = await this.useCase.useCreateProduct(body);
    return res.json(Product);
  };
  public updateProduct = async ({ body }: Request, res: Response) => {
    const Product = await this.useCase.useUpdateProduct(
      body,
      body.product_uuid
    );
    return res.json(Product);
  };
  public deleteProduct = async ({ params }: Request, res: Response) => {
    const Product = await this.useCase.useDeleteProduct(params.product_uuid);
    return res.json(Product);
  };
}
