import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {map} from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

  public loginForm!: FormGroup

  searchStudent = new FormGroup(
    {
      rollno: new FormControl(''),
     
      dob: new FormControl(''),
      
    }
  )

  constructor(private http: HttpClient, private api:ApiService,private router:Router,private formbuilder: FormBuilder) { }




  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      rollno: [''],
      dob: ['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/studentDetails").subscribe((res)=>{
      const user = res.find((a:any)=>{
        return a.rollno === this.loginForm.value.rollno && a.dob === this.loginForm.value.dob 
      });
      if(user){
        alert('Login Succesful');
        this.loginForm.reset()
        this.api.userData=user;
      this.router.navigate(["result"])
      }else{
        this.api.userData=null;
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }

  search(){
    
    const y = (this.searchStudent.get('rollno').value)
   
   
    this.api.getResultStudent(y).subscribe((res)=>{
console.log("result is",res)
    })
    // this.api.getResultStudent()

  }

}
