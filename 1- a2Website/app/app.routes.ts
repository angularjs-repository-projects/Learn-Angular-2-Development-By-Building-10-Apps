import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/pages/home.component";
import {AboutComponent} from "./components/pages/about.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
