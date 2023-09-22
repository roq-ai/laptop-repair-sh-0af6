import axios from 'axios';
import queryString from 'query-string';
import { LaptopInventoryInterface, LaptopInventoryGetQueryInterface } from 'interfaces/laptop-inventory';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLaptopInventories = async (
  query?: LaptopInventoryGetQueryInterface,
): Promise<PaginatedInterface<LaptopInventoryInterface>> => {
  const response = await axios.get('/api/laptop-inventories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLaptopInventory = async (laptopInventory: LaptopInventoryInterface) => {
  const response = await axios.post('/api/laptop-inventories', laptopInventory);
  return response.data;
};

export const updateLaptopInventoryById = async (id: string, laptopInventory: LaptopInventoryInterface) => {
  const response = await axios.put(`/api/laptop-inventories/${id}`, laptopInventory);
  return response.data;
};

export const getLaptopInventoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/laptop-inventories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLaptopInventoryById = async (id: string) => {
  const response = await axios.delete(`/api/laptop-inventories/${id}`);
  return response.data;
};
