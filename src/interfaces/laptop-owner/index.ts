import { GetQueryInterface } from 'interfaces';

export interface LaptopOwnerInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LaptopOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
}
