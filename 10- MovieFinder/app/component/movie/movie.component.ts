import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './movie.component.html',
  providers: [MovieService]
})

export class MovieComponent implements OnInit{
  movie:Object;

  constructor(private router:ActivatedRoute, private _movieService: MovieService) { }

  ngOnInit() {
    this.router.params
      .subscribe(
        params => {
          let id = params['id'];
          this._movieService.getMovie(id)
            .subscribe(
              movie => {
                this.movie = movie;
              }
            )
        }
      )
  }
}
