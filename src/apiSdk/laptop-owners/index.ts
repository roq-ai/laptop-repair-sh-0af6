import axios from 'axios';
import queryString from 'query-string';
import { LaptopOwnerInterface, LaptopOwnerGetQueryInterface } from 'interfaces/laptop-owner';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLaptopOwners = async (
  query?: LaptopOwnerGetQueryInterface,
): Promise<PaginatedInterface<LaptopOwnerInterface>> => {
  const response = await axios.get('/api/laptop-owners', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLaptopOwner = async (laptopOwner: LaptopOwnerInterface) => {
  const response = await axios.post('/api/laptop-owners', laptopOwner);
  return response.data;
};

export const updateLaptopOwnerById = async (id: string, laptopOwner: LaptopOwnerInterface) => {
  const response = await axios.put(`/api/laptop-owners/${id}`, laptopOwner);
  return response.data;
};

export const getLaptopOwnerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/laptop-owners/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLaptopOwnerById = async (id: string) => {
  const response = await axios.delete(`/api/laptop-owners/${id}`);
  return response.data;
};
