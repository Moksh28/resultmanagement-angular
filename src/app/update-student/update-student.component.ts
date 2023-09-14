import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
alert:boolean=false;
  editStudent = new FormGroup(
    {
      rollno: new FormControl(''),
      name: new FormControl(''),
      dob: new FormControl(''),
      score: new FormControl('')
    }
  )

  constructor(private router: ActivatedRoute, private api: ApiService, private route:Router) { }

  ngOnInit(): void {

    const x = (this.router.snapshot.paramMap.get('id'))
    this.api.getCurrentStudent(x).subscribe((result) => {
      this.editStudent = new FormGroup(
        {
          rollno: new FormControl(result['rollno']),
          name: new FormControl(result['name']),
          dob: new FormControl(result['dob']),
          score: new FormControl(result['score'])
        }
      )
    })
  }

  collection(){
    const y = (this.router.snapshot.paramMap.get('id'))
    console.warn(this.editStudent.value);
    this.api.updateStudent(y,this.editStudent.value).subscribe((result)=>{
      console.warn("result",result)
      
    })
    alert("Student Details Updated Successfully! ")
    this.route.navigate(["student-dashboard"])
  }

  closeAlert(){
    this.alert=false;
  }

}
