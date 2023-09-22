import { GetQueryInterface } from 'interfaces';

export interface LaptopModelInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LaptopModelGetQueryInterface extends GetQueryInterface {
  id?: string;
}
