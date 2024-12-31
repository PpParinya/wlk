import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isPopupVisible = false;
  email = '';
  password = '';

  constructor(private router: Router) {} 

  showPopup() {
    this.isPopupVisible = true;
  }

  no() {
    this.isPopupVisible = false;
  }

  onSubmit() {
    console.log('Form Submitted');
    console.log(`Email: ${this.email}, Password: ${this.password}`);
    let i = 71;
    this.isPopupVisible = false;

    this.router.navigate([`Home/${i}`]);
  }
}
