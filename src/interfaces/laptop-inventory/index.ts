import { GetQueryInterface } from 'interfaces';

export interface LaptopInventoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LaptopInventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
