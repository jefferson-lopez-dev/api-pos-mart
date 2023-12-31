"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = require("express");
const mongo_1 = require("../repository/mongo");
const useCase_1 = require("../../app/useCase");
const controllers_1 = require("../controllers");
exports.ProductRoute = (0, express_1.Router)();
const MongoFolderRepository = new mongo_1.MongoRepository();
const folderUseCase = new useCase_1.ProductUseCase(MongoFolderRepository);
const { searchAllProducts, searchInventoryProducts, searchFolderProducts, searchAProduct, createProduct, updateProduct, deleteProduct, } = new controllers_1.ProductControllers(folderUseCase);
exports.ProductRoute.post("/search/allProducts", searchAllProducts);
exports.ProductRoute.post("/search/inventoryProducts", searchInventoryProducts);
exports.ProductRoute.post("/search/folderProducts", searchFolderProducts);
exports.ProductRoute.post("/search/aProduct", searchAProduct);
exports.ProductRoute.post("/", createProduct);
exports.ProductRoute.put("/", updateProduct);
exports.ProductRoute.delete("/:product_uuid", deleteProduct);
