import { GetQueryInterface } from 'interfaces';

export interface ServiceStatusInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ServiceStatusGetQueryInterface extends GetQueryInterface {
  id?: string;
}
