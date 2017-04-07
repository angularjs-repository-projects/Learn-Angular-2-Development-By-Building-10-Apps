import {Injectable} from "angular2/src/core/di/decorators";
import {Http, Headers} from "angular2/http";
import "rxjs/add/operator/map"

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  private nResults = 20;

  constructor(private _http:Http){ }

  searchMusic(music: string, type="artist") {
    this.searchUrl = "http://api.spotify.com/v1/search?query="
      + music+"&offset=0&limit="+this.nResults.toString()
      +"&type="+type
      +"&market=US";
    return this._http.get(this.searchUrl).map(
      res => res.json()
    );
  }

  getArtist(id:string) {
    this.artistUrl = "http://api.spotify.com/v1/artists/"+id;
    return this._http.get(this.artistUrl).map(
      res => res.json()
    );
  }

  getAlbums(id:string) {
    this.albumsUrl = "http://api.spotify.com/v1/artists/"+id+"/albums";
    return this._http.get(this.albumsUrl).map(
      res => res.json()
    );
  }

  getAlbum(id:string) {
    this.albumUrl = "http://api.spotify.com/v1/albums/"+id;
    return this._http.get(this.albumUrl).map(
      res => res.json()
    );
  }
}
