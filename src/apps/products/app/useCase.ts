import { Product } from "../domain/entity";
import { ProductRepository } from "../domain/repository";
import { ProductValue } from "../domain/value";

export class ProductUseCase {
  constructor(private readonly Products: ProductRepository) {}

  public useSearchAllProducts = async (create_by: string) => {
    return await this.Products.searchAllProducts(create_by);
  };
  public useSearchInventoryProducts = async (
    create_by: string,
    inventory_id: string
  ) => {
    return await this.Products.searchInventoryProducts(create_by, inventory_id);
  };
  public useSearchFolderProducts = async (
    folder_uuid: string,
    create_by: string
  ) => {
    return await this.Products.searchFolderProducts(folder_uuid, create_by);
  };
  public useSearchAProduct = async (
    product_uuid: string,
    create_by: string
  ) => {
    return await this.Products.searchAProduct(product_uuid, create_by);
  };
  public useCreateProduct = async (productData: Product) => {
    const data = new ProductValue(productData);
    return await this.Products.createProduct(data);
  };
  public useUpdateProduct = async (
    productData: Product,
    product_uuid: string
  ) => {
    return await this.Products.updateProduct(productData, product_uuid);
  };
  public useDeleteProduct = async (product_uuid: string) => {
    return await this.Products.deleteProduct(product_uuid);
  };
}
