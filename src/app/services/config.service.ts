import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  private URLServer = 'http://192.168.1.20:3000';
  private headers: any;


  constructor() { };

  getURLServer(){
    return this.URLServer;
  }

  getHeaders(){
    return this.headers = { headers: new HttpHeaders({
      'Content-Type': 'application/json', 
    }),
     withCredentials: false
  };
  }

  requestOptions(){

    this.headers = { 
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      }), 
      withCredentials: false
    };
    return this.headers;

  }

}
