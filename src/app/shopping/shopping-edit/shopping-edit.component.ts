import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'ea17-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('myIngName') iName : any;
  @ViewChild('myIngBrand') iBrand : any;
  @ViewChild('myIngImg') iImg : any;
  @ViewChild('myIngQty') iQty : any;
  @ViewChild('myIngPrice') iPrice :any;
 
  // @Output('sendIngredientToParentMain') ingEmitter = new EventEmitter();

  constructor( private shopServ : ShoppingService) { }

  ngOnInit(): void {
  }

  // addNewIngedient(iName : any, iBrand : any, iImg : any, iPrice : any ){
  //   const addNewInged = new Ingredient (iName.value, iBrand.value, +iQty.value, +iPrice.value, iImg.value);
  //   console.log(addNewInged)
  // }

  addNewIngedient(){
    // console.log(this.iName.nativeElement.value)
    const newIngred = new Ingredient (
      this.iName.nativeElement.value,
      this.iBrand.nativeElement.value,
      +this.iQty.nativeElement.value,
      +this.iPrice.nativeElement.value,
      this.iImg.nativeElement.value);


      this.shopServ.addNewIngredient(newIngred);
    // console.log(newIngred);
    // this.ingEmitter.emit(newIngred);
    this.iName.nativeElement.value = this.iBrand.nativeElement.value = this.iQty
    
    // this.iName.nativeElement.value,this.iBrand.nativeElement.value,this.iQty.nativeElement.value,this.iPrice.nativeElement.value,this.iImg.nativeElement.value =' ';
  }

}
