export interface CartItem {
  sku: string;
}

export interface CartState {
  items: Array<CartItem>;
}
