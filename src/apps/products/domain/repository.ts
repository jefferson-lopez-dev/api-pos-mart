import { Product } from "./entity";

export interface FolderRepository {
  //searchs alls
  searchAllProducts(create_by: string): Promise<any>;
  searchInventoryProducts(
    create_by: string,
    inventory_id: string
  ): Promise<any>;
  //searchs one
  searchFolderProducts(folder_uuid: string, create_by: string): Promise<any>;
  searchAProduct(product_uuid: string, create_by: string): Promise<any>;
  //crud
  createFolder(productData: Product): Promise<any>;
  updateFolder(productData: Product, folder_uuid: string): Promise<any>;
  deleteFolder(product_uuid: string): Promise<any>;
}
