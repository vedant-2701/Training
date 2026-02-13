import mongoose, { Schema, type InferRawDocType } from "mongoose";

const TaskSchemaDefinition = {
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    status: { 
        type: String,
        enum: ["OPEN", "CLOSED"], 
        default: "OPEN" 
    },
    assignedTo: { 
        type: String 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
} as const;

const TaskSchema: Schema = new Schema(TaskSchemaDefinition);

export type TaskInterface = InferRawDocType<typeof TaskSchemaDefinition>;

export type PartialTaskInterface = Partial<TaskInterface>;

export default mongoose.model<TaskInterface>("Task", TaskSchema);
