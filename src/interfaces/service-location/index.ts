import { GetQueryInterface } from 'interfaces';

export interface ServiceLocationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ServiceLocationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
