import { task } from "../types/types";
import { myFetch } from "./myFetch";

export async function getAllTasks(): Promise<task[]> {
    return await myFetch("tasks");
}

export async function addTask(task: task): Promise<task> {
    return await myFetch("tasks", "POST", task);
}
