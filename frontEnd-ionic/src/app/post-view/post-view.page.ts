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
    data='';
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
        this.data = response;
        console.log(this.data)        });
    
    }
}
