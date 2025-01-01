import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class DataLogin {
    datalogin: any;
    firstname: any;
    lastname: any;
    teacherId: any;
    
    setdataLogin(data: any) {
        this.datalogin = data;
        // console.log(this.datalogin);
        this.firstname = data[0].firstname;
        this.lastname = data[0].lastname;
        this.teacherId = data[0].teacherId;

        console.log(this.firstname);
    };
}