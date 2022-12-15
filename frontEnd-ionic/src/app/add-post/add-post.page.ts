import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
    username =localStorage.getItem('username');
    user_id =localStorage.getItem('user_id');
    title = '';
    image_URL = '';
    description = '';
    addPost_status = '';

    constructor(private apiService:ApisService, private router:Router) {}

    async addPost(){
      if(localStorage.getItem('user_id')=='' || this.image_URL=='' || this.title =='' || this.description==''){
        this.addPost_status = "Please fill all the fields";
      }

      //===============HERE===========================
      else{   
        this.apiService.addPost(localStorage.getItem('user_id'), this.title, this.image_URL, this.description).subscribe((response: any) => {
        if(response.success = true){
          this.addPost_status = "Post added succesfully"
        }
        });
        

      }
    }

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
