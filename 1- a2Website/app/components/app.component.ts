import {Component} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'my-app',
  template: ` 
 <navbar></navbar> 
 <jumbotron></jumbotron>
 <div class="container">
 <router-outlet></router-outlet>
 </div>
`,
})

export class AppComponent {
  name = 'Angular';
}
