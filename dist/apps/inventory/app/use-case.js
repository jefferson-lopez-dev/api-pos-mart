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
exports.InventoryUseCase = void 0;
const value_1 = require("../domain/value");
class InventoryUseCase {
    constructor(Inventory) {
        this.Inventory = Inventory;
        this.useCreate = (data) => __awaiter(this, void 0, void 0, function* () {
            const invValue = new value_1.InventoryValue(data);
            const invCreated = yield this.Inventory.create(invValue);
            return invCreated;
        });
        this.useUpdate = (data, uuid) => __awaiter(this, void 0, void 0, function* () {
            const invCreated = yield this.Inventory.update(data, uuid);
            return invCreated;
        });
        this.useFindById = (uuid, create_by) => __awaiter(this, void 0, void 0, function* () {
            const invCreated = yield this.Inventory.findById(uuid, create_by);
            return invCreated;
        });
        this.useFindAll = (create_by) => __awaiter(this, void 0, void 0, function* () {
            const invCreated = yield this.Inventory.findAll(create_by);
            return invCreated;
        });
        this.useDelete = (uuid) => __awaiter(this, void 0, void 0, function* () {
            const invCreated = yield this.Inventory.delete(uuid);
            return invCreated;
        });
    }
}
exports.InventoryUseCase = InventoryUseCase;
