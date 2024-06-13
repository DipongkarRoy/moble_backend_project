import config from "../../app/config";
import catchAsyne from "../../app/utils/catchAsyne";
import { authServices } from "./auth.services";

const register = catchAsyne(async(req ,res)=>{
    const result = await authServices.register(req.body)
    res.status(200).json({
        success:true ,
        massage:'register create successfully',
        data:result
    })
})
const login = catchAsyne(async(req ,res)=>{
   
    console.log(req.body);
    console.log('data hit kore');
    const {accessToken ,refressToken} = await authServices.login(req.body)
    console.log( 'ascesss ' ,accessToken ,"reresfh",refressToken);
    res.cookie('refressToken' ,refressToken,{
        httpOnly:true ,
        secure:config.node_dev ==='production'
    })
    res.status(200).json({
        success:true ,
        massage:'login is successfully',
        data:{
            accessToken 
        }
    })
})


export const authControllers = {
    register ,
    login
}