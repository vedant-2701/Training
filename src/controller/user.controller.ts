import { wrapAsync } from "../utils/wrapAsync.js";
import { UserMapper } from "../mappers/user.mapper.js";
import type { Request, Response } from "express";
import type { UserInterface } from "../models/user.js";
import type { UserServiceInterface } from "../services/interfaces/UserServiceInterface.js";
import type { CreateUserDTO, UserResponseDTO } from "../dtos/user.dto.js";

export class UserController {

    constructor(private userService: UserServiceInterface) { }

    findUser = wrapAsync(async (req: Request, res: Response) => {
        const users: UserInterface[] = await this.userService.getAllUsers();

        const response: UserResponseDTO[] = UserMapper.toDTOs(users);
        res.send(response);
    });
    
    registerUser = wrapAsync(async (req: Request, res: Response) => {    
        const userData: CreateUserDTO = req.body;
    
        const user: UserInterface = await this.userService.createUser(userData);

        const response: UserResponseDTO = UserMapper.toDTO(user);
    
        res.status(200).send(response);
    });
}

