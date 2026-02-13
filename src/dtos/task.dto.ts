export interface CreateTaskDTO {
    title: string;
    description?: string;
    assignedTo?: string;
}

export interface UpdateTaskDTO {
    title?: string;
    description?: string;
    status?: "OPEN" | "CLOSED";
    assignedTo?: string;
}

export interface TaskResponseDTO {
    id: string;
    title: string;
    description?: string;
    status: string;
    assignedTo?: string;
    createdAt: Date;
}