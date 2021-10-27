export interface Product {
  name: string;
  image: string;
  price: number;
  brand?: string;
}

export interface SearchResponse {
  results: Array<Product>
}