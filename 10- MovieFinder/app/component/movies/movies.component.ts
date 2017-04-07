import { Component } from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html',
  providers: [MovieService ],
})

export class MoviesComponent  {
  popularList:Array<Object>;
  theatersList:Array<Object>;
  searchRes:Array<Object>;

  searchstring: string;
  nMoviesResults : string = "18";
  nMovies:string = "6";

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular()
      .subscribe(
        res => {
          this.popularList = res.results;
        }
      )

    this._movieService.getInTheaters()
      .subscribe(
        res => {
          this.theatersList = res.results;
        }
      )
  }

  searchMovies() {
    console.log(this.searchstring);

    this._movieService.searchMovies(this.searchstring)
      .subscribe( res => {
        this.searchRes = res.results;
      });
  }
}
