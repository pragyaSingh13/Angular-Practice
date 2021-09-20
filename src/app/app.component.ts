import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
