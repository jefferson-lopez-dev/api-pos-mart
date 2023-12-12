import { Folder } from "./entity";

export interface FolderRepository {
  //searchs alls
  searchAllFolders(create_by: string): Promise<any>;
  searchInventoryFolders(inventory_id: string, create_by: string): Promise<any>;
  //searchs one
  searchAFolder(folder_uuid: string, create_by: string): Promise<any>;
  searchForAnInventoryFolder(
    folder_uuid: string,
    create_by: string,
    inventory_id: string
  ): Promise<any>;
  //crud
  createFolder(folderData: Folder): Promise<any>;
  updateFolder(folderData: Folder, folder_uuid: string): Promise<any>;
  deleteFolder(folder_uuid: string): Promise<any>;
}
