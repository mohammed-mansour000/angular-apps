export interface Product {
  filter(arg0: (el: any) => boolean): Product;
  id: number;
  title: String;
  price: String;
  description: String;
  category: number;
  image: String;
}
