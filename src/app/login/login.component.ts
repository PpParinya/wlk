import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { Router } from '@angular/router';
import { Http2ServerRequest } from 'node:http2';
import { TeacherService } from '../services/teacher.service';
import { DataLogin } from '../services/dataLogin.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isPopupVisible = false;
  password = '';
  http: any;

  constructor(
    private router: Router, 
    private teacherService: TeacherService,
    private dataLogin: DataLogin
  ) {}

  showPopup() {
    this.isPopupVisible = true;
  }

  no() {
    this.isPopupVisible = false;
  }

  onSubmit() {
    this.isPopupVisible = false;

    this.teacherService.GetLogin(this.password).subscribe(
      async (data: any) => {
        // console.log(data);

        if (data != 'no') {
          this.router.navigate([`Home`]);
          this.dataLogin.setdataLogin(data);
        }
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
  }
}
