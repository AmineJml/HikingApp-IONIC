import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private apiService:ApisService, private router:Router) {}
    image ='';
  name = '';
  commentTest='';

  gender = '';
  age = '';
  nationality = '';

  title = "BATA";
    go() {
    this.router.navigate(['add-post']);
  }
  ngOnInit() { //on start (same as onCreate)
    this.apiService.get_comments().subscribe((response: any) => {
      this.commentTest = response.comment;
      console.log("AAAAAAAA" + this.commentTest);
  });

  }
//================================================================
  pressMe()
  {
  //add const because its not public
    const name = this.name.replace(/\s/g, '');
    this.apiService.get_comments().subscribe((response: any) => {
      this.commentTest = response.comment;
    });
  }

}
