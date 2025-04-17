import { task } from "../types/types";
import { myFetch } from "./myFetch";

export async function getAllTasks(): Promise<task[]> {
    return await myFetch("tasks");
}
