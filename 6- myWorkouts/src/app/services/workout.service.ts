import {Injectable} from "@angular/core";
import "rxjs/Rx";
import {Http, Headers} from "@angular/http";

@Injectable()
export class WorkoutService {

  apiKey: string = "DG0j0nwtnENEundYr7xPkf5ZS8PcQlb2";
  workoutsUrl : string = "https://api.mlab.com/api/1/databases/myworkoutsapp/collections/workouts";

  constructor(private _http: Http) {
    console.log("Service connected!");
  }

  check(){};

  getWorkouts() {
    console.log(this.workoutsUrl + "?apiKey=" + this.apiKey);
    return this._http.get(this.workoutsUrl + "?apiKey=" + this.apiKey)
      .map(
        res => res.json()
      );
  }

  addWorkout(workout: {title: any; note: any; type: any}) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.post(this.workoutsUrl + "?apiKey=" + this.apiKey, JSON.stringify(workout), {headers: headers})
      .map(res =>
      res.json());
  }

  deleteWorkout(id) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.delete(this.workoutsUrl + "/" + id + "?apiKey=" + this.apiKey, {headers: headers})
      .map(res =>
        res.json());
  }
}
