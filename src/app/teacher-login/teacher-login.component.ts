import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss'],
  
})

export class TeacherLoginComponent implements OnInit {

  loginFrom=new FormGroup(
    {
      password:new FormControl('',Validators.required)
    //  dob: new FormControl('')
    }
  )

  fixPassword:string='teacher';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getValues(val:any)
   {
     console.warn(val)
   }

   submit()
   {
    console.log(this.loginFrom.value);
    if(this.loginFrom.value.password == this.fixPassword){
      //console.log();
      
         this.router.navigate(['/student-dashboard']);
    }
    else{
      alert("Invalid Password!");
    }
   }
   
}
