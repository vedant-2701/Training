import { Router } from "express";
import { getTasks, saveTask , updateTask, destroyTask} from "../controller/task.controller.js";

const router: Router = Router();

router
    .route("/")
    .get(getTasks)
    .post(saveTask);

router
    .route("/:id")
    .put(updateTask)
    .delete(destroyTask);

export default router;
