import type { TaskInterface } from "../models/task.js";
import type { TaskResponseDTO } from "../dtos/task.dto.js";

export class TaskMapper {
    static toDTO(task: TaskInterface): TaskResponseDTO {
        return {
            id: task._id.toString(),
            title: task.title,
            description: task?.description ?? "",
            status: task.status,
            assignedTo: task?.assignedTo ?? "Unassigned",
            createdAt: task.createdAt
        };
    }

    static toDTOs(tasks: TaskInterface[]): TaskResponseDTO[] {
        return tasks.map(task => TaskMapper.toDTO(task));
    }
}