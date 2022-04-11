/* eslint-disable no-unused-vars */
declare type userId = number;

type message = {
    sender: number;
    receiver: number;
    message: string;
}

declare interface Iconversation {
    id: number;
    users: userId[];
    name: string,
    messages?: message[];
}
