import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FenceComponent } from './fence/fence.component';
import { PlacesComponent } from './places/places.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'auth', component: LoginComponent},
  {path: 'auth/home', component: HomeComponent},
  {path: 'auth/fence', component: FenceComponent},
  {path: 'auth/places', component: PlacesComponent},
  {path: 'auth/profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
