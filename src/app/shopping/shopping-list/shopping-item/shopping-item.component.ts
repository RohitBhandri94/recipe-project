import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ea17-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})

export class ShoppingItemComponent implements OnInit {


  @Input('getDataFromParentList') ingredient :any;

  constructor() { }

  ngOnInit(): void {
  }

}
