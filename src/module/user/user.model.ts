import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import { User_Role, User_Status } from './user.const';
import bcryptjs from "bcryptjs";
import config from '../../app/config';






const UserSchema = new Schema<TUser>({
  name: { type: String, required: true },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: Object.keys(User_Role),
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: 0,
    
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: Object.keys(User_Status),
    default: User_Status.Active,
  },
  passwordChangeAt: { type: Date },
});

UserSchema.pre('save' ,async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this ;
    user.password= await bcryptjs.hash(user.password ,Number(config.bcrypt_salt))
    next()
})
UserSchema.post('save' ,function(doc ,next){
    doc.password=''
    next()
} )

export const UserModel = model<TUser>('User', UserSchema);
