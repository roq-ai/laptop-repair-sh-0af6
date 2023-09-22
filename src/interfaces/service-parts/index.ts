import { GetQueryInterface } from 'interfaces';

export interface ServicePartsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ServicePartsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
