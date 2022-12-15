import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  constructor(private apiService:ApisService, private router:Router) {}
    user_id = localStorage.getItem('user_id');
    fname ='';
    lname ='';
    username='';
    password='';
    passwordConf='';

    editProf_status = '';


    editProfile(){
    if(this.username=='' || this.password=='' || this.fname =='' || this.lname=='' || this.passwordConf==''){
      this.editProf_status = "Please fill all the fields";
      console.log(localStorage.getItem('test'))   
    }

    if(this.password != this.passwordConf){
      this.editProf_status = "Password and password confirmation do not match";
    }
    //===============HERE===========================
    else{
      
      this.apiService.editProfile(localStorage.getItem('user_id'), this.username, this.password, this.fname, this.lname).subscribe((response: any) => {
        console.log(response.success)

        if(response.success != "user_already_exit"){
          this.editProf_status = "Account created";
          // this.storage.set('username', this.username)
        }
        this.editProf_status = "User already exist";

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
