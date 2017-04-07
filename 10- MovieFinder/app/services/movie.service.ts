import {Injectable} from "@angular/core";
import {Jsonp, Http} from "@angular/http";
import "rxjs/Rx";
import {URLSearchParams} from '@angular/http';

@Injectable()
export class MovieService {
  apiKey: string = "&api_key=3b961c0438ed1f1d92c5d21f40a23302";
  url: string = "https://api.themoviedb.org/3/";
  popular: string = "sort_by=popularity.desc";
  query: string = "query=";
  minDate: string = "&primary_release_date.gte=2016-06-01";
  maxDate: string = "&primary_release_date.lte=2016-12-01";

  constructor(private _http:Http) {
    console.log("Movie service init");
  }

  getPopular() {
    var url = this.url + "discover/movie?" + this.popular + this.apiKey;
    return this._http.get(url)
      .map(
        res => res.json()
      );
  }

  getInTheaters() {
    var url = this.url + "discover/movie?" + this.minDate + this.maxDate +this.popular + this.apiKey;
    return this._http.get(url)
      .map(
        res => res.json()
      );
  }

  searchMovies(movie:string) {
    var url = this.url + "search/movie?" + this.query + movie + "&" + this.popular + this.apiKey;
    return this._http.get(url)
      .map(
        res => res.json()
      );
  }

  getMovie(id:string) {
    var url = this.url + "movie/" + id + "?" + this.apiKey;
    return this._http.get(url)
      .map(
        res => res.json()
      );
  }
}
