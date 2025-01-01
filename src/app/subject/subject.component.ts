import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GradelevelService } from '../services/gradelevel.service';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  attendance: any = {};
  onSubmit() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private gradelevelService: GradelevelService
  ) {}

  ngOnInit(): void {}

  gradelevel: any;
  StudentName() {
    this.gradelevelService.setGradelevel().subscribe(
      async (data: any) => {
        console.log(data);
        this.gradelevel = data; // Store the fetched student data

        // Initialize attendance for each student
        this.attendance = this.gradelevel.map((student: any) => ({
          present: false,
          late: false,
          absent: false,
          remarks: '',
        }));

        this.isPopupVisible = true; // Show the popup
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
  }

  goBack() {
    this.location.back(); // ย้อนกลับไปหน้าก่อนหน้านี้
  }

  isPopupVisible = false;
  showPopup() {
    this.StudentName();
    this.isPopupVisible = true;
  }
  no() {
    this.isPopupVisible = false;
  }
}
