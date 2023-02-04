import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shared/services/shopping.service';

@Component({
  selector: 'ea17-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  // providers :[
  //   ShoppingService
  // ]
})
export class ShoppingComponent implements OnInit {
 
  // newlyAddedIngredient : any;

  // catchEventFromChildEdit(newIngredientCatched : any){
  //   this.newlyAddedIngredient = newIngredientCatched
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
