import { User } from "./user";

export class Profile {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    gender?: string;
    age?: string;
    country?: string;
    city?: string;
    address?: string;
    user?: User;
    phone?: string;
    cartId?: number;
    image?: string;
}
