"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssingIBValue = void 0;
const uuid_1 = require("uuid");
class AssingIBValue {
    constructor({ name_box, name_inventory, box_id, create_by, inventory_id, }) {
        this.uuid = (0, uuid_1.v4)();
        this.name_box = name_box;
        this.name_inventory = name_inventory;
        this.creation_date = Date.now();
        this.inventory_id = inventory_id;
        this.box_id = box_id;
        this.create_by = create_by;
    }
}
exports.AssingIBValue = AssingIBValue;
