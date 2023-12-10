export type Affiliation = { name: string; id: string };

export interface Folder {
  name: string;
  description: string;
  belongs: Affiliation[];
}

export interface FolderEntity extends Folder {
  uuid: string;
  create_by: string;
  creation_date: Date;
}
