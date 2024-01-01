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
const inventory_1 = require("../models/inventory");
class MongoRepository {
    findById(uuid, create_by) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventory = yield inventory_1.Inventory.findOne({ uuid });
            if ((inventory === null || inventory === void 0 ? void 0 : inventory.create_by) !== create_by) {
                return {
                    message: "Unauthorized access",
                };
            }
            return inventory;
        });
    }
    findAll(create_by) {
        const inventory = inventory_1.Inventory.paginate({ create_by });
        return inventory;
    }
    create(Inventory) {
        const inventory = inventory_1.Inventory.create(Inventory);
        return inventory;
    }
    update(Inventory, uuid) {
        const inventory = inventory_1.Inventory.findOneAndUpdate({ uuid: uuid }, Inventory);
        return inventory;
    }
    delete(uuid) {
        const inventory = inventory_1.Inventory.findOneAndDelete({ uuid });
        return inventory;
    }
}
exports.MongoRepository = MongoRepository;
