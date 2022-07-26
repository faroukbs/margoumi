import { Role } from "./role";

export class User {
    id!: number;
    fname!: String;
    lname!: String;
    email!: String;
    password!: String;
    phone!: String;
    adress!: String;
    token!: String;
    role: Role = Role.USER;
}
