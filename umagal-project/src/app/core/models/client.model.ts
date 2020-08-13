import { User } from './user.model';

export interface Client extends User {
  address: string;
  contact_phone: string;
}
