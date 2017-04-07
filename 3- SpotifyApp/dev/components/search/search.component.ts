import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {SpotifyService} from "../../services/spotify.service";
import {Artists} from "../artist/artists";
import {Router} from "angular2/src/router/router";

@Component({
  selector: 'search',
  templateUrl: '/dev/components/search/search.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [SpotifyService],
})

export class SearchComponent {
  searchStr: string;
  searchRes: Artists[];

  constructor(private _router:Router, private _spotifyService: SpotifyService) {
  }

  searchMusic() {
    if (this.searchStr.length > 0) {
      this._spotifyService.searchMusic(this.searchStr)
        .subscribe(
          res => {
            this.searchRes = res.artists.items;
          }
        )
    }
  }

  redirectToArtist(id: string) {
    console.log("Artist id: " + id);
    this._router.navigate(['Artist', { artistid: id} ]);
  }
}
