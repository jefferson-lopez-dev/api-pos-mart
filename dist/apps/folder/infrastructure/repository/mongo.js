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
exports.MongoRepository = void 0;
const folder_schema_1 = require("../models/folder.schema");
const Unauthorized = {
    message: "Unauthorized access",
};
class MongoRepository {
    searchAllFolders(create_by) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield folder_schema_1.FolderModel.paginate({ create_by });
        });
    }
    searchInventoryFolders(inventory_id, create_by) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const folders = yield folder_schema_1.FolderModel.paginate({ inventory_id });
            if (((_a = folders.docs[0]) === null || _a === void 0 ? void 0 : _a.create_by) !== create_by)
                return Unauthorized;
            return folders;
        });
    }
    searchAFolder(folder_uuid, create_by) {
        return __awaiter(this, void 0, void 0, function* () {
            const folder = yield folder_schema_1.FolderModel.findOne({ uuid: folder_uuid });
            if ((folder === null || folder === void 0 ? void 0 : folder.create_by) !== create_by)
                return Unauthorized;
            return folder;
        });
    }
    searchForAnInventoryFolder(folder_uuid, create_by, inventory_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const folder = yield folder_schema_1.FolderModel.findOne({
                uuid: folder_uuid,
                inventory_id,
            });
            if ((folder === null || folder === void 0 ? void 0 : folder.create_by) !== create_by)
                return Unauthorized;
            return folder;
        });
    }
    createFolder(folderData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield folder_schema_1.FolderModel.create(folderData);
        });
    }
    updateFolder(folderData, folder_uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield folder_schema_1.FolderModel.findOneAndUpdate({ uuid: folder_uuid }, folderData);
        });
    }
    deleteFolder(folder_uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield folder_schema_1.FolderModel.findOneAndDelete({ uuid: folder_uuid });
            return res;
        });
    }
}
exports.MongoRepository = MongoRepository;
