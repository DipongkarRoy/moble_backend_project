
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createAdminIntoDb = async(payload :TUser)=>{
    const admin = await UserModel.create(payload)
    return admin ;
}

const updateUser =async(_id:string ,payload:TUser)=>{
    const result = await UserModel.findByIdAndUpdate({_id },payload)
    return result ;
}




export  const UserService = {
    createAdminIntoDb ,
    updateUser
}