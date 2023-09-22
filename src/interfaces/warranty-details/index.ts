import { GetQueryInterface } from 'interfaces';

export interface WarrantyDetailsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface WarrantyDetailsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
