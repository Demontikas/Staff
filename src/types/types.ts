interface IKey {
    [key: string]: any;
}
export interface IPerson extends IKey{
    id: number;
    surname: string;
    name: string;
    lastname: string;
    photo: string;
    birthday: Date | null;
    gender: string;
    post: string;
    work: string;
}
export interface IUser {
    user: IPerson;
}