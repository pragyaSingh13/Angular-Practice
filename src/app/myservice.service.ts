import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  showDate(){
    let ndate = new Date();
    return ndate;
  }
}
