export interface ProductResponse {
  name: string;
  brand: string;
  brand_url: string;
  price: number;
  images: Array<string>;
  average_rating: number;
  small_description: string;
  total_reviews: number;
}
