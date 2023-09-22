import axios from 'axios';
import queryString from 'query-string';
import { LaptopModelInterface, LaptopModelGetQueryInterface } from 'interfaces/laptop-model';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLaptopModels = async (
  query?: LaptopModelGetQueryInterface,
): Promise<PaginatedInterface<LaptopModelInterface>> => {
  const response = await axios.get('/api/laptop-models', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLaptopModel = async (laptopModel: LaptopModelInterface) => {
  const response = await axios.post('/api/laptop-models', laptopModel);
  return response.data;
};

export const updateLaptopModelById = async (id: string, laptopModel: LaptopModelInterface) => {
  const response = await axios.put(`/api/laptop-models/${id}`, laptopModel);
  return response.data;
};

export const getLaptopModelById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/laptop-models/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLaptopModelById = async (id: string) => {
  const response = await axios.delete(`/api/laptop-models/${id}`);
  return response.data;
};
