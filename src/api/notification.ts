import { notification } from "../types/types";
import { myFetch } from "./myFetch";

export function getNotification(): Promise<Array<notification>> {
    return myFetch('notifications')
}

export function markNotificationAsRead(): Promise<{
    message: string;
    count: number;
}> {
    return myFetch(`notifications/mark-all-read`, "PATCH");
}