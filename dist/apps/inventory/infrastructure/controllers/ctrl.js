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
exports.InventoryController = void 0;
class InventoryController {
    constructor(useCase) {
        this.useCase = useCase;
        this.findInventoryById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body, query } = req;
            const { id, create_by } = query;
            if (id !== undefined || id !== "") {
                const Inventory = yield this.useCase.useFindById(String(id), String(create_by));
                return res.json(Inventory);
            }
            const Inventory = yield this.useCase.useFindById(body.uuid, body.create_by);
            return res.json(Inventory);
        });
        this.findAllInventories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Inventory = yield this.useCase.useFindAll(body.create_by);
            return res.json(Inventory);
        });
        this.createInventory = ({ body }, res) => __awaiter(this, void 0, void 0, function* () {
            const Inventory = yield this.useCase.useCreate(body);
            return res.json({
                status: 204,
                message: "New Inventory was created successfully",
                Inventory,
            });
        });
        this.updateInventory = ({ body }, res) => __awaiter(this, void 0, void 0, function* () {
            const Inventory = yield this.useCase.useUpdate(body, body.uuid);
            return res.json({
                status: 204,
                message: "Inventory has been updated",
                uuid: Inventory.uuid,
            });
        });
        this.deleteInventory = ({ params }, res) => __awaiter(this, void 0, void 0, function* () {
            const Inventory = yield this.useCase.useDelete(params.uuid);
            return res.json(Inventory);
        });
    }
}
exports.InventoryController = InventoryController;
