import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {SpotifyService} from "../../services/spotify.service";
import {Album} from "../album/album";
import {Artists} from "./artists";
import {ROUTER_PROVIDERS} from "angular2/router"
import {OnInit} from "angular2/src/core/linker/interfaces";
import {RouteParams} from "angular2/src/router/instruction";
import {Router} from "angular2/src/router/router";

@Component({
  selector: 'artist',
  templateUrl: '/dev/components/artist/artist.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [SpotifyService, SpotifyService],
})

export class ArtistComponent implements OnInit{
  id: string;
  artist: Artists[];
  albums: Album[];

  constructor(private _spotifyService: SpotifyService, private _route: RouteParams, private _router:Router) {}

  ngOnInit() {
    this.id = this._route.get("artistid");
    console.log("artista id " + this.id);
    this._spotifyService.getArtist(this.id).subscribe(
      artist => {
        this.artist = artist;
      }
    );
    this._spotifyService.getAlbums(this.id).subscribe(
      albums => {
        this.albums = albums.items;
      }
    );
  }

  redirectToAlbum(id:string) {
    console.log("Album id: " + id);
    this._router.navigate(['Album', { albumid: id} ]);
  }
}
