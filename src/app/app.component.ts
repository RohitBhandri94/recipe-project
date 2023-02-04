import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentSelectedFeature = 'recipe';

  catchEventFromHeaderChild(eve : string){
    console.log('Hurayy we catchsed the event',eve)
    this.currentSelectedFeature= eve;
  }

}
