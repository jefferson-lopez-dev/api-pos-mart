export type Inventory = {
  name: string;
  description: string;
  create_by: string;
};

export interface InventoryEntity {
  uuid: string;
  name: string;
  description: string;
  creation_date: number;
  create_by: string;
}
