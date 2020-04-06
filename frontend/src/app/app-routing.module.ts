import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {webdevcomponent} from './webdevcomponent/web-dev.component';
  //path '/privacyPolicy'

const routes: Routes = [];
/*
const routes : Routes = [
  { path: ' ', component: webdevcomponent }
  {path: ' ', redirectTo: home, pathMatch: 'full'}
  ];
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
