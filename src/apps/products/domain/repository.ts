import { Product } from "./entity";

export interface ProductRepository {
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
  createProduct(productData: Product): Promise<any>;
  updateProduct(productData: Product, product_uuid: string): Promise<any>;
  deleteProduct(product_uuid: string): Promise<any>;
}
