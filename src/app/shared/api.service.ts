import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  userData:any=null;

  constructor(private http: HttpClient) { }

  postStudent(data){
    //console.warn("service",data)
  return this.http.post("http://localhost:3000/studentDetails",data);
   
  }

  getStudent(){
    return this.http.get("http://localhost:3000/studentDetails")
   
  }

   deleteStudent(id){
    console.log(id);
     return this.http.delete("http://localhost:3000/studentDetails/"+id)
    
  }

  getCurrentStudent(id){
    console.log(id);
     return this.http.get("http://localhost:3000/studentDetails/"+id)
    
  }

   updateStudent(id,data){
  return this.http.put("http://localhost:3000/studentDetails/"+id,data)
    }


    getResultStudent(rollno){
      console.log(rollno);
     
       return this.http.get("http://localhost:3000/studentDetails/"+rollno)
      
    }



}
