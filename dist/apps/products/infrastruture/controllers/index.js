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
exports.ProductControllers = void 0;
class ProductControllers {
    constructor(useCase) {
        this.useCase = useCase;
        this.searchAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Products = yield this.useCase.useSearchAllProducts(body.create_by);
            return res.json(Products);
        });
        this.searchInventoryProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Products = yield this.useCase.useSearchInventoryProducts(body.create_by, body.inventory_id);
            return res.json(Products);
        });
        this.searchFolderProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Products = yield this.useCase.useSearchFolderProducts(body.folder_uuid, body.create_by);
            return res.json(Products);
        });
        this.searchAProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Products = yield this.useCase.useSearchAProduct(body.product_uuid, body.create_by);
            return res.json(Products);
        });
        this.createProduct = ({ body }, res) => __awaiter(this, void 0, void 0, function* () {
            const Product = yield this.useCase.useCreateProduct(body);
            return res.json(Product);
        });
        this.updateProduct = ({ body }, res) => __awaiter(this, void 0, void 0, function* () {
            const Product = yield this.useCase.useUpdateProduct(body, body.product_uuid);
            return res.json(Product);
        });
        this.deleteProduct = ({ params }, res) => __awaiter(this, void 0, void 0, function* () {
            const Product = yield this.useCase.useDeleteProduct(params.product_uuid);
            return res.json(Product);
        });
    }
}
exports.ProductControllers = ProductControllers;
