export type Affiliation = { name: string; id: string };

export type Inventory = {
  name: string;
  description: string;
  create_by: string;
};

export interface InventoryUpdate extends Inventory {
  uuid: string;
}

export interface InventoryEntity {
  uuid: string;
  name: string;
  description: string;
  creation_date: number;
  create_by: string;
}

export interface AssignedBoxesEntity {
  uuid: string;
  name: string;
  assignment: Affiliation;
  belongs: Affiliation[];
  create_by: string;
  creation_date: Date;
}

export interface FolderEntity {
  uuid: string;
  name: string;
  description: string;
  belongs: Affiliation[];
  create_by: string;
  creation_date: Date;
}

export interface ProductsEntity {
  uuid: string;
  name: string;
  description: string;
  code: string;
  quantity: number;
  initial_cost: number;
  base_price: number;
  taxes: string;
  final_price: number;
  category: string;
  picture: {
    url: string;
    public_id: string;
  };
  belongs: Affiliation[];
  creation_date: Date;
  create_by: string;
}
