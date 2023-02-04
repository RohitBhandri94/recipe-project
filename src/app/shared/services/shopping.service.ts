import { EventEmitter } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";

export class ShoppingService{
    private ingredientList = [
      
            new Ingredient('oil','Gemini',15,2500,'https://scontent.fnag6-2.fna.fbcdn.net/v/t39.30808-6/308021037_3394423840883533_7879929404339380154_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3ovWVWwV4joAX-qIe5s&_nc_ht=scontent.fnag6-2.fna&oh=00_AfATVSXf7EhzDRV_et4rDl4Q0dG1k8_15sXXUi94apVQDQ&oe=636D9E19'),
            new Ingredient('Salt','Tata',2,40,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3O4nkQpVV_Zq6GKGQpE37MupnVmzeoppe1MqbBYjr1Q&s'),
            new Ingredient('Chilli','MDH',1,50,'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-12/MDH.jpg')
          
    ];
    listEmitter = new EventEmitter;

    getIngredientList(){
        return this.ingredientList.slice();
    }

    addNewIngredient(ingred :any){
        this.ingredientList.push(ingred);
        this.listEmitter.emit(this.getIngredientList());
        // console.log('update list ==>>',this.IngredientList);
        // console.log('updated list from method ==>',this.getIngredientList());
    }

    catchIngredentListFromRecipeService( ingredList : any){
        //this.ingredentList = [...this.ingredentList,...ingredList]
        this.ingredientList.push(...ingredList);
        this.listEmitter.emit(this.getIngredientList());
    }


}
