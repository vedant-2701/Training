import type { ObjectId } from "mongodb";
import mongoose from "mongoose";

interface UserType{
  _id : ObjectId;
  name : string | null;
  email : string | null;
  password : string | null;
}

interface MongoUser extends UserType, mongoose.Document{};

const UserSchema = new mongoose.Schema <MongoUser> ({
  name: { type : String, default : null },
  email: { type : String, default : null },
  password: { type : String, default : null },
});

const User = mongoose.model("User", UserSchema);

export type { UserType, MongoUser };
export { User };