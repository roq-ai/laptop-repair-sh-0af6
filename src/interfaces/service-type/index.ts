import { GetQueryInterface } from 'interfaces';

export interface ServiceTypeInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ServiceTypeGetQueryInterface extends GetQueryInterface {
  id?: string;
}
