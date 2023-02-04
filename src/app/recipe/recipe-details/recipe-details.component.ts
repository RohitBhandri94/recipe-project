import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'ea17-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {

 @Input('catchRecipeDataFromParent') recipe : Recipe |any;

 constructor( private recipeServ : RecipeService){}

  ngOnInit(): void {
    console.log('this is from recipe details=>',this.recipe);
  }


  sendIngredient(){
    this.recipeServ.catchIngredientListFromRecipeDetails(this.recipe.ingredientList)
  }



}
