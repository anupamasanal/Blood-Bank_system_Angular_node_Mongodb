import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import DataTable from 'datatables.net-bs5';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent {
  constructor(private http: HttpClient) {
    $(document).ready(function () {
      $('#tab2').dataTable()
    }); 
  }
}
