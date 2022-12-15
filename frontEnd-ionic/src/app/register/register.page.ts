import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    fname ='';
    lname ='';
    username='';
    password='';
    passwordConf='';

    register_status='';
    constructor(private router: Router, private apiService:ApisService) {}  
    goTab1() {  
        this.router.navigate(['login']);
    }
    register(){
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
    ngOnInit() {
    }

}
