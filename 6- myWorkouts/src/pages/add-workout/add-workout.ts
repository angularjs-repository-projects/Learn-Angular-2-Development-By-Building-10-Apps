import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutPage} from "../workouts/workouts";

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
  providers: [WorkoutService],
})

export class AddWorkoutPage {
  title;
  note;
  type;

  service: WorkoutService;
  result: any;

  constructor(public navCtrl: NavController, workoutService: WorkoutService) {
    this.service = workoutService;
  }

  onSubmit() {
    console.log(this.title + " " + this.note + " " + this.type);
    var workout = {
      title : this.title,
      note: this.note,
      type: this.type
    };

    this.service.addWorkout(workout).subscribe(data => {
      this.result = data
    },
      err => console.log(err),
    () => console.log("Workout added"));

    console.log("result " + this.result);

    this.navCtrl.setRoot(WorkoutPage);
  }
}
