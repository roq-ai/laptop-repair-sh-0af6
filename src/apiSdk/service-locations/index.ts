import axios from 'axios';
import queryString from 'query-string';
import { ServiceLocationInterface, ServiceLocationGetQueryInterface } from 'interfaces/service-location';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getServiceLocations = async (
  query?: ServiceLocationGetQueryInterface,
): Promise<PaginatedInterface<ServiceLocationInterface>> => {
  const response = await axios.get('/api/service-locations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createServiceLocation = async (serviceLocation: ServiceLocationInterface) => {
  const response = await axios.post('/api/service-locations', serviceLocation);
  return response.data;
};

export const updateServiceLocationById = async (id: string, serviceLocation: ServiceLocationInterface) => {
  const response = await axios.put(`/api/service-locations/${id}`, serviceLocation);
  return response.data;
};

export const getServiceLocationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/service-locations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteServiceLocationById = async (id: string) => {
  const response = await axios.delete(`/api/service-locations/${id}`);
  return response.data;
};
