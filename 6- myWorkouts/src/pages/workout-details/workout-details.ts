import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutPage} from "../workouts/workouts";

@Component({
  selector: 'page-details',
  templateUrl: 'workout-details.html',
  providers: [WorkoutService],
})
export class DetailsPage {
  work: any;
  result: any;
  servive: WorkoutService;

  constructor(public navCtrl: NavController, navParams: NavParams, workoutService: WorkoutService) {
    this.work = navParams.get("work");
    this.servive = workoutService;
  }

  deleteWorkout(id){
    this.servive.deleteWorkout(id).subscribe(data => {
        this.result = data
      },
      err => console.log(err),
      () => console.log("Workout deleted"));

    console.log("result " + this.result);

    this.navCtrl.setRoot(WorkoutPage);
  }
}
