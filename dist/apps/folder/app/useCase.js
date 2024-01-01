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
exports.FoldersUseCase = void 0;
const value_1 = require("../domain/value");
class FoldersUseCase {
    constructor(Folder) {
        this.Folder = Folder;
        //search all
        this.useSearchAllFolders = (create_by) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Folder.searchAllFolders(create_by);
        });
        this.useSearchInventoryFolders = (inventory_id, create_by) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Folder.searchInventoryFolders(inventory_id, create_by);
        });
        //search one
        this.useSearchAFolder = (folder_uuid, create_by) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Folder.searchAFolder(folder_uuid, create_by);
        });
        this.useSearchForAnInventoryFolder = (folder_uuid, create_by, inventory_id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Folder.searchForAnInventoryFolder(folder_uuid, create_by, inventory_id);
        });
        //crud
        this.useCreate = (data) => __awaiter(this, void 0, void 0, function* () {
            const invValue = new value_1.FolderValue(data);
            return yield this.Folder.createFolder(invValue);
        });
        this.useUpdate = (data, folder_uuid) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Folder.updateFolder(data, folder_uuid);
        });
        this.useDelete = (folder_uuid) => __awaiter(this, void 0, void 0, function* () {
            return yield this.Folder.deleteFolder(folder_uuid);
        });
    }
}
exports.FoldersUseCase = FoldersUseCase;
