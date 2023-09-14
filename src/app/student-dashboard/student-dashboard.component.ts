import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StudentModel } from './student-dash board.model';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  
  collection:any=[];
  constructor(private api: ApiService) {
    this.getAllResults();
   }
 

  ngOnInit(): void {
   this.getAllResults();
  }

  getAllResults(){
    this.api.getStudent().subscribe((result)=>{
      console.warn(result)
      this.collection=result
      console.log(this.collection)
       })
  }
  deleteStudent(item){
   
    this.api.deleteStudent(item.id).subscribe((result)=>{
      console.warn("result",result)
      this.collection.splice(item-1,1)
      this.getAllResults();
    })
    
  }
  




}
