import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
    username ='';
    location = '';
    googleMaps = '';
    image_URL = '';
    description = '';

    constructor(private apiService:ApisService, private router:Router) {}

    addPost(){
      if(this.username=='' || this.password=='' || this.fname =='' || this.lname=='' || this.passwordConf==''){
        this.register_status = "Please fill all the fields";
        console.log(localStorage.getItem('test'))   
      }

      if(this.password != this.passwordConf){
        this.register_status = "Password and password confirmation do not match";
      }
      //===============HERE===========================
      else{
        
        this.apiService.createAcc(this.username, this.password, this.fname, this.lname).subscribe((response: any) => {
          console.log(response.success)

          if(response.success != "user_already_exit"){
            this.register_status = "Account created";
            // this.storage.set('username', this.username)
          }
          this.register_status = "User already exist";

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
