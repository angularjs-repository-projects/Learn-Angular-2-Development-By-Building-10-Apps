import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map"

/*
 Client ID
 f87f9ec760fce5e857bc
 Client Secret
 92d9c7f2e31f3d6477e11b97829366e1513587ad
*/
@Injectable()
export class GitHubService {
    private username:string = "";
    private userUrl: string = "http://api.github.com/users/";
    private repoUrl: string = "/repos";

    private clientId: string = "f87f9ec760fce5e857bc";
    private clientSecret:string = "92d9c7f2e31f3d6477e11b97829366e1513587ad";

    constructor(private _http: Http) {
        console.log("Github service ReADY");
    }

    getUser() {
        var url = this.userUrl + this.username + "?client_id="+this.clientId+"&client_secret="+this.clientSecret;
        console.log(url);
        return this._http.get(url)
            .map(res => res.json());
    }

    getRepos() {
        var url = this.userUrl + this.username + this.repoUrl + "?client_id="+this.clientId+"&client_secret="+this.clientSecret;
        console.log(url);
        return this._http.get(url)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}