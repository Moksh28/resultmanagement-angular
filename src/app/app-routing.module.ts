import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherLoginComponent} from './teacher-login/teacher-login.component'
import {StudentLoginComponent} from './student-login/student-login.component'
import { HomeComponent } from './home/home.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ResultSearchComponent } from './result-search/result-search.component';

const routes: Routes = [
  {
    path:'teacher',
    component:TeacherLoginComponent
  },
  {
    path:'student',
    component:StudentLoginComponent
  },
  {
    path:'update/:id',
    component:UpdateStudentComponent
  },
  {
    path:'result',
    component:ResultSearchComponent
  },
  {
    path:'addstudent',
    component:AddStudentComponent
  },
  {
    path:'student-dashboard',
    component: StudentDashboardComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
