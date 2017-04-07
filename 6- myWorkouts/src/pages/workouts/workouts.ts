import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {DetailsPage} from "../workout-details/workout-details";

@Component({
  selector: "page-workouts",
  templateUrl: "workouts.html",
  providers: [WorkoutService],
})

export class WorkoutPage implements OnInit {
  _work: any;
  workouts : any;

  constructor(public navCtrl: NavController, workoutService: WorkoutService, navParams: NavParams) {
    this._work = workoutService;

    this._work.getWorkouts().subscribe(
      workoutsData => {
        this.workouts = workoutsData;
        console.log(this.workouts);
      }
    );
  }

  ngOnInit() {
    this._work.getWorkouts().subscribe(
      workoutsData => {
        this.workouts = workoutsData;
        console.log(this.workouts);
      }
    );
  }

  workoutSelected(event, work) {
    console.log(work);
    this.navCtrl.push(DetailsPage , {
      work: work
    });
  }
}
