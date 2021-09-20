import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todaydate;
  constructor(private myservice: MyserviceService){
  }
  ngOnInit(){
    this.todaydate = this.myservice;
  }
  title = 'First';
  description ='this is the description';
  months = ["jan", "feb","mar"];
  isAvailable = false;

  setTrue(){
    alert("its true");
  }
  setFalse(){
  alert("it's false");
  }
}
