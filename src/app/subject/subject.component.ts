import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  subjectId: number | undefined;
  idx: number | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  // ตัวอย่างข้อมูลรายชื่อ
  people = [
    { name: 'สมชาย', selected: false },
    { name: 'สมหญิง', selected: false },
    { name: 'สมนึก', selected: false },
    { name: 'สมนารถ', selected: false }
  ];

  ngOnInit(): void {
    // ดึง subject.id (sid) จาก URL (paramMap)
    this.route.paramMap.subscribe(params => {
      this.subjectId = +params.get('sid')!;  // ใช้ sid จาก URL
      console.log(`Received subjectId: ${this.subjectId}`);
    });

    // ดึง idx จาก URL (paramMap)
    this.route.paramMap.subscribe(params => {
      this.idx = +params.get('idx')!;  // ใช้ idx จาก URL
      console.log(`Received idx: ${this.idx}`);
    });
  }

  goBack() {
    this.location.back(); // ย้อนกลับไปหน้าก่อนหน้านี้
  }
}
