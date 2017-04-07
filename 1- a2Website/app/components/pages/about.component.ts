import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html'
})

export class AboutComponent  {
  private projectName: string;

  constructor() {
    this.projectName = "A2Wesite";
  }
}
