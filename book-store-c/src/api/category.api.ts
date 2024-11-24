import { Category } from '../models/category.model';
import { requestHandler } from './http';

export const fetchCategory = async () => {
  try {
    return await requestHandler<Category[]>('get', '/category');
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
