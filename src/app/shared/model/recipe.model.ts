import { Ingredient } from "./ingredient.model";

export class Recipe{
    name:string;
    description:string;
    imgData:string;
    ingredientList : Ingredient[];

    constructor(rName:string, rDese:string, rImg:string , ingList : Ingredient[]){
       
     this.name = rName;
        this.description =rDese;
        this.imgData = rImg;
        this.ingredientList = ingList;
    }

}
