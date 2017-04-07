import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Album} from "./album";
import {SpotifyService} from "../../services/spotify.service";
import {RouteParams} from "angular2/src/router/instruction";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {Router} from "angular2/src/router/router";

@Component({
  selector: 'album',
  templateUrl: '/dev/components/album/album.component.html',
  directives: [ROUTER_DIRECTIVES],
})

export class AlbumComponent implements OnInit{
  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService, private _route: RouteParams) {}

  ngOnInit() {
    this.id = this._route.get("albumid");
    console.log("album id " + this.id);
    this._spotifyService.getAlbum(this.id).subscribe(
      album => {
        this.album = album;
      }
    );
  }
}
