import { User_Role, User_Status } from "./user.const";

export type TUser = {
    name:string ,
    role:keyof typeof User_Role ,
    email:string ,
    password:string ,
    status:keyof typeof User_Status ,
    passwordChangeAt?:Date 
}