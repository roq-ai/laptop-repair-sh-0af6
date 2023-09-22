import axios from 'axios';
import queryString from 'query-string';
import { ServiceTicketInterface, ServiceTicketGetQueryInterface } from 'interfaces/service-ticket';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceTickets = async (
  query?: ServiceTicketGetQueryInterface,
): Promise<PaginatedInterface<ServiceTicketInterface>> => {
  const response = await axios.get('/api/service-tickets', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createServiceTicket = async (serviceTicket: ServiceTicketInterface) => {
  const response = await axios.post('/api/service-tickets', serviceTicket);
  return response.data;
};

export const updateServiceTicketById = async (id: string, serviceTicket: ServiceTicketInterface) => {
  const response = await axios.put(`/api/service-tickets/${id}`, serviceTicket);
  return response.data;
};

export const getServiceTicketById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/service-tickets/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteServiceTicketById = async (id: string) => {
  const response = await axios.delete(`/api/service-tickets/${id}`);
  return response.data;
};
