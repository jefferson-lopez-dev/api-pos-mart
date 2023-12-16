export interface AssingIB {
  name_box: string;
  name_inventory: string;
  box_id: string;
  inventory_id: string;
  create_by: string;
}

export interface AssingIBEntity extends AssingIB {
  uuid: string;
  creation_date: number;
}
