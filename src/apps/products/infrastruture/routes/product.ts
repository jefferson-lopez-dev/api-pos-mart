import { Router } from "express";
import { MongoRepository as Repository } from "../repository/mongo";
import { ProductUseCase as UseCase } from "../../app/useCase";
import { ProductControllers as Controllers } from "../controllers";

export const ProductRoute = Router();

const MongoFolderRepository = new Repository();
const folderUseCase = new UseCase(MongoFolderRepository);
const {
  searchAllProducts,
  searchInventoryProducts,
  searchFolderProducts,
  searchAProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = new Controllers(folderUseCase);

ProductRoute.post("/search/allProducts", searchAllProducts);
ProductRoute.post("/search/inventoryProducts", searchInventoryProducts);
ProductRoute.post("/search/folderProducts", searchFolderProducts);
ProductRoute.post("/search/aProduct", searchAProduct);
ProductRoute.post("/", createProduct);
ProductRoute.put("/", updateProduct);
ProductRoute.delete("/:product_uuid", deleteProduct);
