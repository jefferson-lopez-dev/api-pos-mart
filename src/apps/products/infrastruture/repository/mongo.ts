import { Product } from "../../domain/entity";
import { ProductRepository } from "../../domain/repository";
import { ProductModel } from "../models/product.schema";

const Unauthorized = {
  message: "Unauthorized access",
};

export class MongoRepository implements ProductRepository {
  async searchAllProducts(create_by: string): Promise<any> {
    return await ProductModel.paginate({ create_by });
  }
  async searchInventoryProducts(
    create_by: string,
    inventory_id: string
  ): Promise<any> {
    const products = await ProductModel.paginate({ inventory_id });
    if (products.docs[0]?.create_by !== create_by) return Unauthorized;
    return products;
  }
  async searchFolderProducts(
    folder_uuid: string,
    create_by: string
  ): Promise<any> {
    const products = await ProductModel.paginate({ folder_id: folder_uuid });
    if (products.docs[0]?.create_by !== create_by) return Unauthorized;
    return products;
  }
  async searchAProduct(product_uuid: string, create_by: string): Promise<any> {
    const products = await ProductModel.findOne({
      uuid: product_uuid,
      create_by,
    });
    if (products?.create_by !== create_by) return Unauthorized;
    return products;
  }
  async createProduct(productData: Product): Promise<any> {
    return await ProductModel.create(productData);
  }
  async updateProduct(productData: Product, folder_uuid: string): Promise<any> {
    return await ProductModel.findOneAndUpdate(
      { uuid: folder_uuid },
      productData
    );
  }
  async deleteProduct(product_uuid: string): Promise<any> {
    return await ProductModel.findOneAndDelete({ uuid: product_uuid });
  }
}
