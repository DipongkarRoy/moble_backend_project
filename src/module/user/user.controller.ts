import catchAsyne from "../../app/utils/catchAsyne";
import { UserService } from "./user.service";

const createAdmin = catchAsyne(async(req ,res)=>{
    const result = await UserService.createAdminIntoDb(req.body)
    res.status(200).json({
        success :true ,
        massage:'admin create successfully',
        data:result 

    })
})
const updateUser = catchAsyne(async(req ,res)=>{
    const {userId} =req.params ;
    console.log(userId);
    const result = await UserService.updateUser(userId ,req.body)
    res.status(200).json({
        success :true ,
        massage:'user update successfully',
        data:result 

    })
})

export const UserController = {
    createAdmin ,
    updateUser
}