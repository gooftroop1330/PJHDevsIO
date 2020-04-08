import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PrivacyComponent} from "./privacy/privacy.component";
import {NdaComponent} from "./nondisclosure/nda.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'privacy', component: PrivacyComponent},
  //{path: 'nda', component: NdaComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
