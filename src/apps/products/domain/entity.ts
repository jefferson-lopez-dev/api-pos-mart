export interface Product {
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
  inventory_id: string;
  folder_id: string;
  create_by: string;
}

export interface ProductEntity extends Product {
  uuid: string;
  creation_date: number;
}
