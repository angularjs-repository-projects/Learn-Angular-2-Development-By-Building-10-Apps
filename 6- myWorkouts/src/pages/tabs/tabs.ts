import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {WorkoutPage} from "../workouts/workouts";
import {AddWorkoutPage} from "../add-workout/add-workout";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  about: any = AboutPage;
  workoutsRoot: any = WorkoutPage;
  addWorkout: any = AddWorkoutPage;

  constructor() {

  }
}
