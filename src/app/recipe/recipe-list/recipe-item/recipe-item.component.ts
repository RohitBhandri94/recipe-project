import { Component, Input,Output,EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'ea17-recipe-item',
  templateUrl:'./recipe-item.component.html',
  styleUrls:['./recipe-item.component.css']
})
export class RecipeItemComponent  {

  @Input('getRecipeFromParent') recipe : any;
  
  // @Output('sendEventToParentList') itemEventEmitter = new EventEmitter();
  constructor(private recipeServ : RecipeService){}

  recipeSelected(){
    // console.log('clicked the recipe',this.recipe);
    // this.itemEventEmitter.emit(this.recipe);
    // this.itemEventEmitter.emit();
    this.recipeServ.newlySelectedRecipe.emit(this.recipe);
  }
  

}
