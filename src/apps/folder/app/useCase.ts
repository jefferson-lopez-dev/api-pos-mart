import { FolderRepository } from "../domain/repository";
import { FolderValue } from "../domain/value";
import { Folder } from "../domain/entity";

export class FoldersUseCase {
  constructor(private readonly Folder: FolderRepository) {}
  //search all
  public useSearchAllFolders = async (create_by: string) => {
    return await this.Folder.searchAllFolders(create_by);
  };
  public useSearchInventoryFolders = async (
    inventory_id: string,
    create_by: string
  ) => {
    return await this.Folder.searchInventoryFolders(inventory_id, create_by);
  };
  //search one
  public useSearchAFolder = async (folder_uuid: string, create_by: string) => {
    return await this.Folder.searchAFolder(folder_uuid, create_by);
  };
  public useSearchForAnInventoryFolder = async (
    folder_uuid: string,
    create_by: string,
    inventory_id: string
  ) => {
    return await this.Folder.searchForAnInventoryFolder(
      folder_uuid,
      create_by,
      inventory_id
    );
  };
  //crud
  public useCreate = async (data: Folder) => {
    const invValue = new FolderValue(data);
    return await this.Folder.createFolder(invValue);
  };
  public useUpdate = async (data: Folder, folder_uuid: string) => {
    return await this.Folder.updateFolder(data, folder_uuid);
  };
  public useDelete = async (folder_uuid: string) => {
    return await this.Folder.deleteFolder(folder_uuid);
  };
}
