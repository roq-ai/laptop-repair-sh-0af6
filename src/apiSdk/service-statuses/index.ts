import axios from 'axios';
import queryString from 'query-string';
import { ServiceStatusInterface, ServiceStatusGetQueryInterface } from 'interfaces/service-status';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceStatuses = async (
  query?: ServiceStatusGetQueryInterface,
): Promise<PaginatedInterface<ServiceStatusInterface>> => {
  const response = await axios.get('/api/service-statuses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createServiceStatus = async (serviceStatus: ServiceStatusInterface) => {
  const response = await axios.post('/api/service-statuses', serviceStatus);
  return response.data;
};

export const updateServiceStatusById = async (id: string, serviceStatus: ServiceStatusInterface) => {
  const response = await axios.put(`/api/service-statuses/${id}`, serviceStatus);
  return response.data;
};

export const getServiceStatusById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/service-statuses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteServiceStatusById = async (id: string) => {
  const response = await axios.delete(`/api/service-statuses/${id}`);
  return response.data;
};
