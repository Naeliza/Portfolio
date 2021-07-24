import { Component } from '@angular/core';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styles: [
  ]
})
export class InfoListComponent {

  constructor() { }

  born: any = new Date('10-26-2002');
  timeDiff = Math.abs(Date.now() - this.born.getTime());
  showAge = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365);
}
