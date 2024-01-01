"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const FolderSchema = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    creation_date: { type: Date, default: Date.now },
    create_by: { type: String, required: true },
    inventory_id: { type: String, required: true },
}, { timestamps: true });
FolderSchema.plugin(mongoose_paginate_v2_1.default);
const FolderModel = (0, mongoose_1.model)("Folder", FolderSchema);
exports.FolderModel = FolderModel;
