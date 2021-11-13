export interface ILogin {
    token: string;
}
export interface ICheck {
    status: boolean
}
export interface ICheck2 {
    status: ICheck[]
}
export interface IAuth {
    username : string;
    password : string;
}
