import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';
import { ConfigService } from '../services/config.service';
import { GradelevelService } from '../services/gradelevel.service';

@Component({
  selector: 'app-check-in-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-in-room.component.html',
  styleUrl: './check-in-room.component.scss',
})
export class CheckInRoomComponent {
  // รายชื่อรายวิชา
  // subjects = [
  //   { name: 'วิชาคณิตศาสตร์', id: 1 },
  //   { name: 'วิชาวิทยาศาสตร์', id: 2 },
  //   { name: 'วิชาภาษาไทย', id: 3 },
  //   { name: 'วิชาภาษาอังกฤษ', id: 4 },
  //   { name: 'วิชาสังคมศึกษา', id: 5 },
  // ];


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private teacherService: TeacherService,
    private gradelevelService: GradelevelService
  ) {}

  ngOnInit(): void {
    this.GetclassRoomByTeacherId(1);
  }

  goBack() {
    this.location.back(); // ย้อนกลับไปหน้าก่อนหน้านี้
  }

  goToSubjectDetail(subject: any) {
    this.router.navigate([`subject`]);
    this.gradelevelService.set(subject);
  }

  data:any = [];
  GetclassRoomByTeacherId(teacherId: any){
    this.teacherService.GetclassRoomByTeacherId(teacherId).subscribe(
      async (data: any) => {
       
        // console.log(data);
        this.data = data;
        // console.log(this.data);  

      },
      (error: any) => {
        alert(error.error.message);
    });
  }
  
}
