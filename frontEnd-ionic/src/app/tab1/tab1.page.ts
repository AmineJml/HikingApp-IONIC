import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data : {username: any, title: any, description: any, image_URL: any, post_id: any}[]=[];

  constructor(private apiService:ApisService, private router:Router) {
    
  }
    // image ='';
    // name = '';
    // commentTest='';

    // gender = '';
    // age = '';
    // nationality = '';

    // title = "BATA";

   goAddPost() {
    this.router.navigate(['add-post']);
  }
  goPostView(post_id: any){
    localStorage.setItem("post_id", post_id);
    localStorage.setItem("image_URL", post_id);
    localStorage.setItem("title", post_id);
    localStorage.setItem("description", post_id);
    localStorage.setItem("post_user_id", post_id);

    this.router.navigate(['post-view']);

  }
  ngOnInit() { //on start (same as onCreate)


  
  this.apiService.getPosts().subscribe((response: any) => {
    this.data = response;
    console.log(this.data)
});

  }
//================================================================

}
