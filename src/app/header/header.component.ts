import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ea17-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output('sendEventToAppParent') eventHolder = new EventEmitter()
  
 navigateTo(selectedFeature:any){
  console.log('lets navigate',selectedFeature);
  this.eventHolder.emit(selectedFeature)
 }

}
