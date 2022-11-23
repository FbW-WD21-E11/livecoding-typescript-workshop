import { ITea } from "./ITea";

export class Tea implements ITea {
    //fields
    price: number;
    type: string;
    isTasty: boolean;

    constructor(price:number, type:string, isTasty:boolean){
        this.price = price;
        this.type = type;
        this.isTasty = isTasty;
    }

    setTasty(): void {
       this.isTasty = true;
    }

}