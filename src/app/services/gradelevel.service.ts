import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class GradelevelService {
  private URLServer: any;

  constructor(private http: HttpClient, private URLServers: ConfigService) {
    this.URLServer = this.URLServers.getURLServer();
  }

  gradelevel: any;
  set(data: any) {
    // console.log(data.gradelevel);

    this.gradelevel = data.gradelevel;

  }

  setGradelevel() {
    
    console.log(this.gradelevel);

    const url =
      this.URLServer + '/getStudentByGradelevel?gradelevel=' + this.gradelevel;

    return this.http.get<any>(url, this.URLServers.requestOptions());
  }
}
