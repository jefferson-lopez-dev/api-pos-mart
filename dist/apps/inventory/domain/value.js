"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryValue = void 0;
const uuid_1 = require("uuid");
class InventoryValue {
    constructor({ name, description, create_by }) {
        this.uuid = (0, uuid_1.v4)();
        this.name = name;
        this.description = description;
        this.creation_date = Date.now();
        this.create_by = create_by;
    }
}
exports.InventoryValue = InventoryValue;
