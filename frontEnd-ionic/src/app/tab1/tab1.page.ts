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
  goPostView(){
    this.router.navigate(['post-view']);

  }
  ngOnInit() { //on start (same as onCreate)
    console.log(localStorage.getItem('username'))   

    this.apiService.get_comments().subscribe((response: any) => {

      this.commentTest = response[0].comment;
      console.log(this.commentTest);

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
