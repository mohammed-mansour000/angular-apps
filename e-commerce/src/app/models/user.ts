import { Payment } from './payment';
import { Invoice } from './invoice';
import { Order } from './order';
import { Profile } from './profile';

export class User {
    id?: number;
    username?: string;
    password?: string;
    isAdmin?: boolean;
    profileId?: number;
    orders?: Order[];
    invoices?: Invoice[];
    payment?: Payment[];
}
