"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apps_1 = require("./apps");
function endpoint(name) {
    const entry_point = "/api/pos";
    if (name === "fo") {
        return `${entry_point}/folder`;
    }
    if (name === "in") {
        return `${entry_point}/inventory`;
    }
    if (name === "pr") {
        return `${entry_point}/product`;
    }
    else {
        return entry_point;
    }
}
exports.app = (0, express_1.default)();
const corsConfig = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
//MIDDLEWARES
exports.app.use((0, cors_1.default)(corsConfig));
exports.app.use(express_1.default.json());
//ROUTES
exports.app.use(endpoint("fo"), apps_1.FolderRoute);
exports.app.use(endpoint("in"), apps_1.InvRoute);
exports.app.use(endpoint("pr"), apps_1.ProductRoute);
