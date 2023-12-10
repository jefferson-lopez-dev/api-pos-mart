export interface Folder {
  name: string;
  description: string;
  inventory_id: string;
  create_by: string;
}
export interface FolderEntity extends Folder {
  uuid: string;
  creation_date: number;
}
