import mongoose, { Schema, Document } from "mongoose";

export interface UserInterface extends Document {
    name?: string,
    email: string,
    password: string,
}

export type PartialUserInterface = Partial<UserInterface>;

const UserSchema: Schema = new Schema({
    name: { 
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    }
});

export default mongoose.model<UserInterface>("User", UserSchema);
