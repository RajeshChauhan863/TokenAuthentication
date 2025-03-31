import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { LoginComponent } from '../app/login/login.component';
//import { AuthGuard } from './_helpers';

const routes: Routes = [
   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path:'mysite',component:TravelComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
