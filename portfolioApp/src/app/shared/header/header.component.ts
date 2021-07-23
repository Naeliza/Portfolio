import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
 
})
export class HeaderComponent  {

  constructor() { }

  year: Date = new Date;
  

}
