import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-in-line',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-in-line.component.html',
  styleUrl: './check-in-line.component.scss',
})
export class CheckInLineComponent {
  constructor(private location: Location) {}

  // ตัวอย่างข้อมูลรายชื่อ
  people = [
    { name: 'สมชาย', selected: false },
    { name: 'สมหญิง', selected: false },
    { name: 'สมนึก', selected: false },
    { name: 'สมนารถ', selected: false }
  ];

  goBack() {
    this.location.back(); // ย้อนกลับไปหน้าก่อนหน้านี้
  }
}
