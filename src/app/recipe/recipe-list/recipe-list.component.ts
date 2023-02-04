import { Component,Output,EventEmitter } from '@angular/core';
// import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'ea17-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {
 
  recipeList : any = [];

  constructor(private recipeServ:RecipeService){
    this.recipeList = this.recipeServ.getRecipeList();
  }

//  @Output('sendEventToParentRecipe')listEventEmitter = new EventEmitter();

//  catchEventFromChildItem(catchedRecipeData : any){
//   // console.log('cathced event from item',catchedRecipeData);
//   this.listEventEmitter.emit(catchedRecipeData);

//  }



}
