import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  i: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // รับค่าจาก path parameter
    this.route.params.subscribe((params) => {
      this.i = +params['i'];
    });
  }

  Logout() {
    // ลบข้อมูลการเข้าสู่ระบบ (เช่น ลบ token หรือข้อมูลที่เกี่ยวข้อง)
    localStorage.removeItem('authToken'); // ตัวอย่างการลบ token จาก localStorage

    // เปลี่ยนเส้นทางไปที่หน้า login หรือหน้าอื่น ๆ
    this.router.navigate(['']); // หรือหน้าที่คุณต้องการให้ผู้ใช้ไปหลังจากออกจากระบบ
  }

  check_room() {
    this.router.navigate([`CheckInRoom`]);
  }
  check_line() {
    this.router.navigate(['CheckInLine']);
  }
}
