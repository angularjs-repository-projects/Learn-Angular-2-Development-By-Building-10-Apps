import {Component} from 'angular2/core';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AboutComponent} from "./components/about/about.component";
import {SearchComponent} from "./components/search/search.component";
import {RouteConfig} from "angular2/src/router/route_config/route_config_decorator";
import {HTTP_PROVIDERS} from "angular2/http";
import {ArtistComponent} from "./components/artist/artist.component";
import {SpotifyService} from "./services/spotify.service";
import {AlbumComponent} from "./components/album/album.component";

@Component({
  selector: 'my-app',
  templateUrl: "../dev/app.component.html",
  directives: [NavbarComponent, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, SpotifyService],
})

@RouteConfig([
  { path: '/', name: 'Search', component: SearchComponent },
  { path: '/about', name:'About', component: AboutComponent },
  { path: '/artist/artistid', name:'Artist', component: ArtistComponent },
  { path: '/album/albumid', name:'Album', component: AlbumComponent },
])

export class AppComponent {

}
