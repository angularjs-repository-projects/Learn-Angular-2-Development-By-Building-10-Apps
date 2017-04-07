import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './component/app.component';
import {MoviesComponent} from "./component/movies/movies.component";
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {MovieService} from "./services/movie.service";
import {RouterModule, Routes} from "@angular/router";
import {MovieComponent} from "./component/movie/movie.component";

const appRoutes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [AppComponent, MoviesComponent, MovieComponent],
  providers: [MovieService],
  bootstrap: [AppComponent, []]
})

export class AppModule {
}
