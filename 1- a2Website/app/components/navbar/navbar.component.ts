import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'nav.component.html'
})

export class NavbarComponent  {
  private projectName: string;

  constructor() {
    this.projectName = "A2Wesite";
  }
}
