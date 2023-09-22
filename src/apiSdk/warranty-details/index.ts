import axios from 'axios';
import queryString from 'query-string';
import { WarrantyDetailsInterface, WarrantyDetailsGetQueryInterface } from 'interfaces/warranty-details';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWarrantyDetails = async (
  query?: WarrantyDetailsGetQueryInterface,
): Promise<PaginatedInterface<WarrantyDetailsInterface>> => {
  const response = await axios.get('/api/warranty-details', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWarrantyDetails = async (warrantyDetails: WarrantyDetailsInterface) => {
  const response = await axios.post('/api/warranty-details', warrantyDetails);
  return response.data;
};

export const updateWarrantyDetailsById = async (id: string, warrantyDetails: WarrantyDetailsInterface) => {
  const response = await axios.put(`/api/warranty-details/${id}`, warrantyDetails);
  return response.data;
};

export const getWarrantyDetailsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/warranty-details/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWarrantyDetailsById = async (id: string) => {
  const response = await axios.delete(`/api/warranty-details/${id}`);
  return response.data;
};
