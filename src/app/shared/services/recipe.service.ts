import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";
import{ Recipe } from "../model/recipe.model";
import { ShoppingService } from "./shopping.service";
@Injectable()

export class RecipeService{
   private recipeList = [
        new Recipe(
          "Briyani",
          "An party dish to be consumed and pending from EA-17 student",
          "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/biryani-recipe-1.jpg",
          [
            new Ingredient('Rice','india-gate',2,300,
            'https://4.imimg.com/data4/UM/LM/GLADMIN-29505183/2-500x500.png',),
            new Ingredient('Bhiryani-Masala','RAMbANDHU',1,40,
           'https://m.media-amazon.com/images/I/21DDLosbLZL.jpg',)
          ]
        ),
        new Recipe(
          "Panner Makhanwala",
          "An panjabi dish for lunch/dinner menu",
          "https://www.cubesnjuliennes.com/wp-content/uploads/2018/07/Paneer-Butter-Masala1.jpg",
          [
            new Ingredient('Paneer','Amul',2,78,'https://www.logotaglines.com/wp-content/uploads/2018/08/Amul-Logo-slogan-640x480.jpg'),
            new Ingredient('Paneer-Masala','Everest',2,80,'https://brandyuva.in/wp-content/uploads/2019/05/everest-masala-marketing-strategies.jpg'),
          ]
        ),
        new Recipe(
          "Idli Sambhar",
          "An south Indian dish usually consumed at morning",
          "https://img-global.cpcdn.com/recipes/3ad5b61d118fd588/400x400cq70/photo.jpg",
          [
            new Ingredient ('Idali-Battle','Id',1,120,'https://www.bigbasket.com/media/uploads/p/xxl/271205_14-id-fresho-idly-dosa-batter.jpg'),
            new Ingredient ('Coconut','Kerala',1,50,'https://dynamic.brandcrowd.com/asset/logo/109fcb3b-b87b-43c0-888e-dc55c86fd02e/logo-search-grid-1x?v=638024209194530000'),
          ]
        ),
        
      ];
      
      newlySelectedRecipe = new EventEmitter();
      constructor( private shopServ : ShoppingService){}

      getRecipeList(){
        return this.recipeList.slice();
      }

      catchIngredientListFromRecipeDetails(ingredList : any){
         this.shopServ.catchIngredentListFromRecipeService(ingredList)
      }

}
