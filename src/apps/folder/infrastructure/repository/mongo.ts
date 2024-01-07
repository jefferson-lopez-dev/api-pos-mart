import { Folder } from "../../domain/entity";
import { FolderRepository } from "../../domain/repository";
import { FolderModel } from "../models/folder.schema";

const Unauthorized = {
  message: "Unauthorized access",
};

export class MongoRepository implements FolderRepository {
  async searchAllFolders(create_by: string): Promise<any> {
    return await FolderModel.paginate({ create_by });
  }
  async searchInventoryFolders(
    inventory_id: string,
    create_by: string
  ): Promise<any> {
    const folders = await FolderModel.paginate({ inventory_id });
    if (folders.docs.length === 0) {
      return folders;
    }
    if (folders.docs[0]?.create_by !== create_by) return Unauthorized;
    return folders;
  }
  async searchAFolder(folder_uuid: string, create_by: string): Promise<any> {
    const folder = await FolderModel.findOne({ uuid: folder_uuid });
    if (folder?.create_by !== create_by) return Unauthorized;
    return folder;
  }
  async searchForAnInventoryFolder(
    folder_uuid: string,
    create_by: string,
    inventory_id: string
  ): Promise<any> {
    const folder = await FolderModel.findOne({
      uuid: folder_uuid,
      inventory_id,
    });
    if (folder?.create_by !== create_by) return Unauthorized;
    return folder;
  }
  async createFolder(folderData: Folder): Promise<any> {
    return await FolderModel.create(folderData);
  }
  async updateFolder(folderData: Folder, folder_uuid: string): Promise<any> {
    return await FolderModel.findOneAndUpdate(
      { uuid: folder_uuid },
      folderData
    );
  }
  async deleteFolder(folder_uuid: string): Promise<any> {
    const res = await FolderModel.findOneAndDelete({ uuid: folder_uuid });
    return res;
  }
}
