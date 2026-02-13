import mongoose, {  Model,Document } from 'mongoose';
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model<IUser>("User", UserSchema) as Model<IUser>;
export default User;