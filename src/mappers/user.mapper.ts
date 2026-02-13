import type { UserInterface } from "../models/user.js";
import type { UserResponseDTO } from "../dtos/user.dto.js";

export class UserMapper {
    static toDTO(user: UserInterface): UserResponseDTO {
        return {
            id: user._id.toString(),
            name: user.name ?? "",
            email: user.email,
        };
    }

    static toDTOs(users: UserInterface[]): UserResponseDTO[] {
        return users.map(user => UserMapper.toDTO(user));
    }
}