import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  addStudent=new FormGroup(
    {
      rollno:new FormControl(''),
      name : new FormControl(''),
      dob: new FormControl(''),
      score: new FormControl('')
    }
  )

  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {
  }

  collectStudent()
   {
         this.api.postStudent(this.addStudent.value).subscribe((result)=>{
        console.warn("result",result)
      })  
      this.route.navigate(['student-dashboard'])
   }

}
