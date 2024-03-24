import { ReactNode } from "react"

export default interface IRouter{
    title:string
    path:string
    key:string
    element?:ReactNode
    children?:IRouter[]
}