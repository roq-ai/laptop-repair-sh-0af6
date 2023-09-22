import axios from 'axios';
import queryString from 'query-string';
import { ServiceTypeInterface, ServiceTypeGetQueryInterface } from 'interfaces/service-type';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceTypes = async (
  query?: ServiceTypeGetQueryInterface,
): Promise<PaginatedInterface<ServiceTypeInterface>> => {
  const response = await axios.get('/api/service-types', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createServiceType = async (serviceType: ServiceTypeInterface) => {
  const response = await axios.post('/api/service-types', serviceType);
  return response.data;
};

export const updateServiceTypeById = async (id: string, serviceType: ServiceTypeInterface) => {
  const response = await axios.put(`/api/service-types/${id}`, serviceType);
  return response.data;
};

export const getServiceTypeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/service-types/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteServiceTypeById = async (id: string) => {
  const response = await axios.delete(`/api/service-types/${id}`);
  return response.data;
};
