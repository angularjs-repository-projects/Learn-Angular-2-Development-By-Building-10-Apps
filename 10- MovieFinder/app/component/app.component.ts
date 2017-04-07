import { Component } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {Jsonp} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [MovieService, Jsonp]
})

export class AppComponent  {

}
