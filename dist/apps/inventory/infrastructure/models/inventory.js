"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const InventorySchema = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
}, { timestamps: true });
InventorySchema.plugin(mongoose_paginate_v2_1.default);
const Inventory = (0, mongoose_1.model)("Inventory", InventorySchema);
exports.Inventory = Inventory;
