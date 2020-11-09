import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileaddeditComponent } from './profileaddedit/profileaddedit.component';

const routes: Routes = [

 
  { path:'', component: ProfileComponent },
  { path:'profileaddedit', component: ProfileaddeditComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
