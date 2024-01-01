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
exports.FolderController = void 0;
class FolderController {
    constructor(useCase) {
        this.useCase = useCase;
        this.searchAllFolders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Inventory = yield this.useCase.useSearchAllFolders(body.create_by);
            return res.json(Inventory);
        });
        this.SearchInventoryFolders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Inventory = yield this.useCase.useSearchInventoryFolders(body.inventory_id, body.create_by);
            return res.json(Inventory);
        });
        this.SearchAFolder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Inventory = yield this.useCase.useSearchAFolder(body.folder_uuid, body.create_by);
            return res.json(Inventory);
        });
        this.SearchForAnInventoryFolder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const Inventory = yield this.useCase.useSearchForAnInventoryFolder(body.folder_uuid, body.create_by, body.inventory_id);
            return res.json(Inventory);
        });
        this.createFolder = ({ body }, res) => __awaiter(this, void 0, void 0, function* () {
            const Inventory = yield this.useCase.useCreate(body);
            return res.json(Inventory);
        });
        this.updateFolder = ({ body }, res) => __awaiter(this, void 0, void 0, function* () {
            const Inventory = yield this.useCase.useUpdate(body, body.folder_uuid);
            return res.json(Inventory);
        });
        this.deleteFolder = ({ params }, res) => __awaiter(this, void 0, void 0, function* () {
            const Inventory = yield this.useCase.useDelete(params.folder_uuid);
            return res.json(Inventory);
        });
    }
}
exports.FolderController = FolderController;
