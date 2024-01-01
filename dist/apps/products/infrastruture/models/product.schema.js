"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const ProductSchema = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    code: { type: String, required: true },
    quantity: { type: Number, required: true },
    initial_cost: { type: Number, required: true },
    base_price: { type: Number, required: true },
    taxes: { type: String, required: true },
    final_price: { type: Number, required: true },
    category: { type: String },
    picture: {
        url: { type: String },
        public_id: { type: String },
    },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
    inventory_id: { type: String, required: true },
    folder_id: { type: String, required: true },
}, { timestamps: true });
ProductSchema.plugin(mongoose_paginate_v2_1.default);
const ProductModel = (0, mongoose_1.model)("Product", ProductSchema);
exports.ProductModel = ProductModel;
