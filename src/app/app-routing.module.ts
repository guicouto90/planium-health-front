import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { BeneficiaryScreenComponent } from './Components/beneficiary-screen/beneficiary-screen.component';
import { DentistScreenComponent } from './Components/dentist/dentist-screen/dentist-screen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'beneficiary', component: BeneficiaryScreenComponent },
  { path: 'dentist', component: DentistScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
