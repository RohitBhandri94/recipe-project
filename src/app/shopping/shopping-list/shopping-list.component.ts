import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service'   

@Component({
  selector: 'ea17-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
  ingredentList : any[] = [];

  // @Input('getNewIngredientFromParentMain') set ingredientSetter
  // (newIngredientRecevied : any){
  //   //console.log("lock here =>>",val)
  //   if(newIngredientRecevied){
  //     this.ingredentList.push(newIngredientRecevied)
  //   }
  // };

  constructor( private shopServ : ShoppingService) {
    this.ingredentList = this.shopServ.getIngredientList();
    this.shopServ.listEmitter.subscribe((value :any)=>{
      this.ingredentList = value;

    })
   }

  ngOnInit(): void {
  }

}
