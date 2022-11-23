import { Tea } from "./objects/Tea";
import { Todo, WindowEnum, WindowStates } from "./types";

import * as fs from 'fs';

let variableName2:string = "Hello typescript";

console.log(variableName2);

//                         parameter type    return type
const myFirstFunction = (content:string) : string => {
    return `My content is ${content}`;
}
const result:string = myFirstFunction("Check if there was a")

//example todo type
const todo:Todo = {title:"Testing", id:1, completed:true}
todo.completed = false;

//exmaple widowstates
const w:WindowStates = "closed"
const t:WindowEnum = WindowEnum.minimized;

const tea = new Tea(2.20,"GREENTEA",false);
tea.setTasty();
console.log("the tea is now tasty:", tea.isTasty);

//we installed @types/node for this. 
fs.writeFileSync("hello.txt", `The tea is tasty: ${tea.isTasty}` )

console.log(result);