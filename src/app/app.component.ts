
import { Component } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private location: Location){

  }

  goBack():void{
    this.location.back();
  }
}
