import axios from 'axios';
import queryString from 'query-string';
import { ServicePartsInterface, ServicePartsGetQueryInterface } from 'interfaces/service-parts';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceParts = async (
  query?: ServicePartsGetQueryInterface,
): Promise<PaginatedInterface<ServicePartsInterface>> => {
  const response = await axios.get('/api/service-parts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createServiceParts = async (serviceParts: ServicePartsInterface) => {
  const response = await axios.post('/api/service-parts', serviceParts);
  return response.data;
};

export const updateServicePartsById = async (id: string, serviceParts: ServicePartsInterface) => {
  const response = await axios.put(`/api/service-parts/${id}`, serviceParts);
  return response.data;
};

export const getServicePartsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/service-parts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteServicePartsById = async (id: string) => {
  const response = await axios.delete(`/api/service-parts/${id}`);
  return response.data;
};
