import { Privilege } from './privilege';
export class Role{
    id: number;
    title: string;
    description: string;
    privileges: Privilege[];
}