export type Todo = {
    id:number, 
    title:string, 
    completed:boolean
}

//union of multiple types 
//combintion of the folling types
export type WindowStates = "open" | "closed" | "minimized";


export enum WindowEnum {
  open = 1, 
  closed =2,
  minimized =3
}