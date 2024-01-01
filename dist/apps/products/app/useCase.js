"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUseCase = void 0;
const value_1 = require("../domain/value");
class ProductUseCase {
    constructor(Products) {
        this.Products = Products;
        this.useSearchAllProducts = (create_by) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Products.searchAllProducts(create_by);
        });
        this.useSearchInventoryProducts = (create_by, inventory_id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Products.searchInventoryProducts(create_by, inventory_id);
        });
        this.useSearchFolderProducts = (folder_uuid, create_by) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Products.searchFolderProducts(folder_uuid, create_by);
        });
        this.useSearchAProduct = (product_uuid, create_by) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Products.searchAProduct(product_uuid, create_by);
        });
        this.useCreateProduct = (productData) => __awaiter(this, void 0, void 0, function* () {
            const data = new value_1.ProductValue(productData);
            return yield this.Products.createProduct(data);
        });
        this.useUpdateProduct = (productData, product_uuid) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Products.updateProduct(productData, product_uuid);
        });
        this.useDeleteProduct = (product_uuid) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Products.deleteProduct(product_uuid);
        });
    }
}
exports.ProductUseCase = ProductUseCase;
