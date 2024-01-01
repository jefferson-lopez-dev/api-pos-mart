"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderValue = void 0;
const uuid_1 = require("uuid");
class FolderValue {
    constructor({ name, description, create_by, inventory_id }) {
        this.uuid = (0, uuid_1.v4)();
        this.name = name;
        this.description = description;
        this.creation_date = Date.now();
        this.inventory_id = inventory_id;
        this.create_by = create_by;
    }
}
exports.FolderValue = FolderValue;
