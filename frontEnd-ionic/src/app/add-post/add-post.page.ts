import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

    constructor(private router: Router) {}  
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
   }

}
