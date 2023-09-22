import { GetQueryInterface } from 'interfaces';

export interface ServiceTicketInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ServiceTicketGetQueryInterface extends GetQueryInterface {
  id?: string;
}
