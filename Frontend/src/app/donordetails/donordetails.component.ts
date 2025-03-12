import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import DataTable from 'datatables.net-bs5';

@Component({
  selector: 'app-donordetails',
  templateUrl: './donordetails.component.html',
  styleUrls: ['./donordetails.component.css']
})
export class DonordetailsComponent {
  constructor(private http: HttpClient) {
    $(document).ready(function () {
      $('#tab1').dataTable()
    }); 
  }
  
  
}
