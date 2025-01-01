import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {
  
  private URLServer: any;

  constructor(
    private http: HttpClient,
    private URLServers: ConfigService
  ) {
    this.URLServer = this.URLServers.getURLServer();
   }

   GetclassRoomByTeacherId(teacherId: any) {
    const url = this.URLServer+'/getclassRoomByTeacherId?teacherId='+teacherId;
    return this.http.get<any>(url, this.URLServers.requestOptions());
  }

  GetLogin(teacherId: any){
    const url = this.URLServer+'/getLogin?teacherId='+teacherId;
    return this.http.get<any>(url, this.URLServers.requestOptions());
  }
}

