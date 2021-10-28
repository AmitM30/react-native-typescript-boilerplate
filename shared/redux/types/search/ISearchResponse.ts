export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  brand?: string;
}

export interface SearchResponse {
  results: Array<Product>
}