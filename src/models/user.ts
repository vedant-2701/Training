import mongoose, { Schema, type InferRawDocType } from "mongoose";

const UserSchemaDefinition = {
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
} as const;

const UserSchema: Schema = new Schema();

export type UserInterface = InferRawDocType<typeof UserSchemaDefinition>;

export type PartialUserInterface = Partial<UserInterface>;

export default mongoose.model<UserInterface>("User", UserSchema);
