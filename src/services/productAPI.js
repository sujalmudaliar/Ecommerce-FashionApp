import { productsData } from './productData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const ProductAPI = {
  getProductsByCategory: async (category) => {
    try {
      await delay(500);
      const categoryLower = category.toLowerCase();
      switch (categoryLower) {
        case 'womens':
          return productsData.womens;
        case 'mens':
          return productsData.mens;
        case 'trending now':
          return productsData.trending;
        default:
          return [];
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  getAllProducts: async () => {
    try {
      await delay(500);
      return [
        ...productsData.womens,
        ...productsData.mens,
        ...productsData.trending
      ];
    } catch (error) {
      console.error('Error fetching all products:', error);
      return [];
    }
  },

  getTrendingProducts: async () => {
    try {
      await delay(500);
      return productsData.trending;
    } catch (error) {
      console.error('Error fetching trending products:', error);
      return [];
    }
  }
};