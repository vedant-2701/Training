import mongoose, { Schema, Document } from "mongoose";

export interface TaskInterface extends Document {
    title: string;
    description?: string;
    status: "OPEN" | "CLOSED";
    assignedTo?: string;
    createdAt: Date;
}

export type PartialTaskInterface = Partial<TaskInterface>;

const TaskSchema: Schema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    status: { 
        type: String, 
        default: "OPEN" 
    },
    assignedTo: { 
        type: String 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

export default mongoose.model<TaskInterface>("Task", TaskSchema);
