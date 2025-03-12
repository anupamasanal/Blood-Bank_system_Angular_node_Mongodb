import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { DonorComponent } from './donor/donor.component';
import { PatientComponent } from './patient/patient.component';
import { LogregComponent } from './logreg/logreg.component';
import { DonordetailsComponent } from './donordetails/donordetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DonationsComponent } from './donations/donations.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { BloodstockComponent } from './bloodstock/bloodstock.component';
import { DonorhomeComponent } from './donorhome/donorhome.component';
import { BlooddonationComponent } from './blooddonation/blooddonation.component';
import { DonorstatusComponent } from './donorstatus/donorstatus.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { PbloodrequestComponent } from './pbloodrequest/pbloodrequest.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "adminhome",
        component:AdminhomeComponent
      },
      {

        path: "donordetails",
        component: DonordetailsComponent,
      },
      {
        path:"patientdetails",
        component: PatientdetailsComponent,
      },
      {
        path:"donations",
        component: DonationsComponent,
      },
      {
        path: "pbloodrequest",
        component: PbloodrequestComponent,
        
      },
      {
        path:"bloodstock",
        component: BloodstockComponent,
      },
      

    ],
  },
  {
    path: "donor",
    component: DonorComponent,
    children: [
      {
        path: "donorhome",
        component:DonorhomeComponent,
      },
      {

        path: "blooddonation",
        component: BlooddonationComponent,
      },
      {
        path:"donorstatus",
        component: DonorstatusComponent,
      },
    ],
  },
  {
    path: "patient",
    component: PatientComponent,
    children: [
      {
        path: "patienthome",
        component:PatienthomeComponent,
      },
      {
        path:"bloodrequest",
        component: BloodrequestComponent,
        
      },
      {
        path:"status",
        component: StatusComponent,
      },
    ],
  },
  { path: "logreg", component: LogregComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
