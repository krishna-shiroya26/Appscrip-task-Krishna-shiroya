// API service for FakeStore API
const API_BASE_URL = 'https://fakestoreapi.com';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Category {
  name: string;
  count: number;
}

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products by category');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

// Fetch single product
export const fetchProduct = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Fetch all categories
export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Sort products
export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'newest':
      // Since FakeStore doesn't have creation date, we'll sort by ID (higher ID = newer)
      return sortedProducts.sort((a, b) => b.id - a.id);
    
    case 'popular':
      // Sort by rating count (more reviews = more popular)
      return sortedProducts.sort((a, b) => b.rating.count - a.rating.count);
    
    case 'price-high-low':
      return sortedProducts.sort((a, b) => b.price - a.price);
    
    case 'price-low-high':
      return sortedProducts.sort((a, b) => a.price - b.price);
    
    case 'recommended':
    default:
      // Sort by rating (higher rating = more recommended)
      return sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }
};

// Filter products
export const filterProducts = (products: Product[], filters: any): Product[] => {
  let filteredProducts = [...products];
  
  // Filter by category
  if (filters.category && filters.category.length > 0) {
    filteredProducts = filteredProducts.filter(product => 
      filters.category.includes(product.category.toLowerCase())
    );
  }
  
  // Filter by price range (if implemented)
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filteredProducts = filteredProducts.filter(product => 
      product.price >= min && product.price <= max
    );
  }
  
  // Filter by rating (if implemented)
  if (filters.minRating) {
    filteredProducts = filteredProducts.filter(product => 
      product.rating.rate >= filters.minRating
    );
  }
  
  return filteredProducts;
};

// Search products
export const searchProducts = (products: Product[], searchTerm: string): Product[] => {
  if (!searchTerm.trim()) return products;
  
  const term = searchTerm.toLowerCase();
  return products.filter(product => 
    product.title.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)
  );
};
