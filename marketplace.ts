export type SortOption = 
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'name-desc'
  | 'newest';

export type PriceRange = {
  min: number;
  max: number;
};
