import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

  constructor(private apiService: ApiService) { }
   result:any;
   
  ngOnInit(): void {
   this.result=this.apiService.userData;
   console.log(this.result);
  
   
   
  }

  ngOnDestroy(): void{
    this.apiService.userData=null;
  }

}
