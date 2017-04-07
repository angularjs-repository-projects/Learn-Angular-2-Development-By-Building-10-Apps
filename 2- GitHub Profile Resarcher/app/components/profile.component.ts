import {Component} from '@angular/core';
import {GitHubService} from "../services/github.service";
import "rxjs/add/operator/map"

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    providers: [GitHubService],
})

export class ProfileComponent {
    user: any = [];
    repos: any = [];

    constructor(private _githubservice: GitHubService) {
        this.user = false;

        this._githubservice.getUser()
            .subscribe(
                user => {
                    //console.log(user);
                    this.user = user;
                }
            )

        this._githubservice.getRepos()
            .subscribe(
                repos => {
                    //console.log(repos);
                    this.repos = repos;
                }
            )
    }

    searchUser(user: string) {
        if (user.length > 0) {
            this._githubservice.updateUser(user);

            this._githubservice.getUser()
                .subscribe(
                    user => {
                        //console.log(user);
                        this.user = user;
                    }
                )

            this._githubservice.getRepos()
                .subscribe(
                    repos => {
                        //console.log(repos);
                        this.repos = repos;
                    }
                )
        }
    }
}
