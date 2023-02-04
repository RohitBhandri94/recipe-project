import { Component } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'ea17-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [
    RecipeService
  ]
})

export class RecipeComponent  {


  currentSelectedRecipe:any;

  constructor(private recipeServ:RecipeService){
    this.recipeServ.newlySelectedRecipe.subscribe((emittedReipe : any)=>{
      console.log('look here =====>>>',emittedReipe);
      this.currentSelectedRecipe = emittedReipe;

    })

    
  }

  // catchEventFromChildList(catchedRecipeData:any){
  //     // console.log('catched event from list',catchedRecipeData);
  //     this.currentSelectedRecipe = catchedRecipeData;
  // }

}
