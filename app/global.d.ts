/* eslint-disable no-unused-vars */
type message = {
    sender: number;
    receiver: number;
    message: string;
}

declare interface Iconversation {
    id: number;
    users: number[];
    name: string,
    messages?: message[];
}
declare interface IUser {
    id: number,
    username: string,
    email: string,
    password?: string,
    fname?: string,
    lname?: string,
    conversations?: Iconversation[],
}
