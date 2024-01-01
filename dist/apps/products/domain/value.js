"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValue = void 0;
const uuid_1 = require("uuid");
class ProductValue {
    constructor(p) {
        this.uuid = (0, uuid_1.v4)();
        this.name = p.name;
        this.description = p.description;
        this.code = p.code;
        this.quantity = p.quantity;
        this.initial_cost = p.initial_cost;
        this.base_price = p.base_price;
        this.taxes = p.taxes;
        this.final_price = p.final_price;
        this.category = p.category;
        this.picture = p.picture;
        this.folder_id = p.folder_id;
        this.inventory_id = p.inventory_id;
        this.create_by = p.create_by;
        this.creation_date = Date.now();
    }
}
exports.ProductValue = ProductValue;
