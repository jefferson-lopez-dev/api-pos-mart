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
exports.MongoRepository = void 0;
const product_schema_1 = require("../models/product.schema");
const Unauthorized = {
    message: "Unauthorized access",
};
class MongoRepository {
    searchAllProducts(create_by) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_schema_1.ProductModel.paginate({ create_by });
        });
    }
    searchInventoryProducts(create_by, inventory_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_schema_1.ProductModel.paginate({ inventory_id });
            if (((_a = products.docs[0]) === null || _a === void 0 ? void 0 : _a.create_by) !== create_by)
                return Unauthorized;
            return products;
        });
    }
    searchFolderProducts(folder_uuid, create_by) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_schema_1.ProductModel.paginate({ folder_id: folder_uuid });
            if (((_a = products.docs[0]) === null || _a === void 0 ? void 0 : _a.create_by) !== create_by)
                return Unauthorized;
            return products;
        });
    }
    searchAProduct(product_uuid, create_by) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_schema_1.ProductModel.findOne({
                uuid: product_uuid,
                create_by,
            });
            if ((products === null || products === void 0 ? void 0 : products.create_by) !== create_by)
                return Unauthorized;
            return products;
        });
    }
    createProduct(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_schema_1.ProductModel.create(productData);
        });
    }
    updateProduct(productData, folder_uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_schema_1.ProductModel.findOneAndUpdate({ uuid: folder_uuid }, productData);
        });
    }
    deleteProduct(product_uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_schema_1.ProductModel.findOneAndDelete({ uuid: product_uuid });
        });
    }
}
exports.MongoRepository = MongoRepository;
