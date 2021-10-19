export interface Product {
  name: string;
  image: string;
  price: number;
}

export interface SearchResponse {
  results: Array<Product>
}