import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.page.html',
  styleUrls: ['./post-view.page.scss'],
})
export class PostViewPage implements OnInit {
    likes='';
    post_id = '';
    title:any = '';
    username:any ='';
    description:any = '';

    //dataComment : {username: any, title: any, description: any, image_URL: any, post_id: any}[]=[];
    dataComment : {comment: any}[]=[];
    dataUsername = '';

    constructor(private apiService:ApisService, private router:Router) {}
    goTab1() {  
        this.router.navigate(['tabs/tab1']);
    }
    goTab2() {  
        this.router.navigate(['tabs/tab2']);
    }

    goTab3() {  
        this.router.navigate(['tabs/tab3']);
    }
  
    
    ngOnInit() {
      this.apiService.getComments(localStorage.getItem('post_id')).subscribe((response: any) => {
        this.dataComment = response;
      });
      this.apiService.getUsername(localStorage.getItem('post_user_id')).subscribe((response: any) => {
        this.dataUsername = response;
        this.username = response[0].username;
      
      });
      this.title = localStorage.getItem('username');
      this.description = localStorage.getItem('description');


    
    }
}
