export interface ILogin {
    token: string;
}

export interface IRegisterResponse {
    error: boolean
    message: string
    data: IResponseData[]
}

export interface IResponseData {
    id: string
    name: string
    surname: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
}
export interface ICheck {
    status: boolean
}
export interface ICheck2 {
    status: ICheck[]
}
export interface IAuth {
    email : string;
    password : string;
}
export interface IRegister {
    email : string;
    name : string;
    surname : string;
    password : string;
}

export interface IForgotPassword{
    email: string
}
export interface IResetPassword{
    id: string
}
