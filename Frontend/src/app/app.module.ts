import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DonationrequestComponent } from './donationrequest/donationrequest.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DonorhomeComponent } from './donorhome/donorhome.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { DonationsComponent } from './donations/donations.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { BloodstockComponent } from './bloodstock/bloodstock.component';
import { BlooddonationComponent } from './blooddonation/blooddonation.component';
import { DonorstatusComponent } from './donorstatus/donorstatus.component';
import { PbloodrequestComponent } from './pbloodrequest/pbloodrequest.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    DonorComponent,
    PatientComponent,
    LogregComponent,
    DonordetailsComponent,
    LoginComponent,
    RegisterComponent,
    PatientdetailsComponent,
    DonationrequestComponent,
    AdminhomeComponent,
    DonorhomeComponent,
    PatienthomeComponent,
    DonationsComponent,
    BloodrequestComponent,
    BloodstockComponent,
    BlooddonationComponent,
    DonorstatusComponent,
    PbloodrequestComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
