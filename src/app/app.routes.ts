import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CheckInLineComponent } from './check-in-line/check-in-line.component';
import { CheckInRoomComponent } from './check-in-room/check-in-room.component';
import { SubjectComponent } from './subject/subject.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // {path: '', loadComponent: () => import('./main/home/home.component').then(x => x.HomeComponent)},
      // {path: 'about', loadComponent: () => import('./main/about/about.component').then(x => x.AboutComponent)},
    ],
  },
  //   {
  //     path: '**',
  //     component: MainComponent,
  //   },
  { path: '', component: MainComponent },
  { path: 'Home/:i', component: HomeComponent },
  { path: 'CheckInLine', component: CheckInLineComponent },
  { path: 'CheckInRoom/:i', component: CheckInRoomComponent },
  { path: 'subject/:sid/:idx', component: SubjectComponent },

];
