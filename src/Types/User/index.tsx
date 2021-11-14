export interface StorageData{
    createdAt:string
    email:string
    id:string
    name:string
    password:string
    surname:string
    updatedAt:string
}
export interface StorageUser{
    data: StorageData[]
    token:string
}
