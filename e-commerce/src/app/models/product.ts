import { CartItem } from './cart-item';
import { Category } from './category';
import { OrderItem } from './order-item';
export class Product {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    publishedIn?: Date;
    addToCart?: boolean;
    quantity?: number;
    cartQuantity?: number;
    image?: string;
    category?: Category;
    cartItem?: CartItem;
    order_items?: OrderItem[];
}
