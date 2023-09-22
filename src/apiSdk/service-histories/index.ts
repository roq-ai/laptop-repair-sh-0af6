import axios from 'axios';
import queryString from 'query-string';
import { ServiceHistoryInterface, ServiceHistoryGetQueryInterface } from 'interfaces/service-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceHistories = async (
  query?: ServiceHistoryGetQueryInterface,
): Promise<PaginatedInterface<ServiceHistoryInterface>> => {
  const response = await axios.get('/api/service-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createServiceHistory = async (serviceHistory: ServiceHistoryInterface) => {
  const response = await axios.post('/api/service-histories', serviceHistory);
  return response.data;
};

export const updateServiceHistoryById = async (id: string, serviceHistory: ServiceHistoryInterface) => {
  const response = await axios.put(`/api/service-histories/${id}`, serviceHistory);
  return response.data;
};

export const getServiceHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/service-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteServiceHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/service-histories/${id}`);
  return response.data;
};
