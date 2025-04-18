import { user } from "../types/types";
import { myFetch } from "./myFetch";

export async function getAllUsers(): Promise<{ value: string, label: string }[]> {
    try {
        const users: user[] = await myFetch("users");
        const mappedUsers: { value: string, label: string }[] = users?.map((user) => ({
            value: user?._id,
            label: user?.name
        })
        );
        return mappedUsers;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}