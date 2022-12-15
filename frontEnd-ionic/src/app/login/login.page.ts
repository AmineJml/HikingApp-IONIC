import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username = '';
  password = '';
  check_fields = '';


  constructor(private apiService:ApisService, private router:Router) {}
  
    login() {  
      // const name = this.username.replace(/\s/g, '');
      // const name = this.username.replace(/\s/g, '');
      if(this.username=='' || this.password==''){
        this.check_fields = "Please fill all the fields";
      }
      else{
        
        this.apiService.login(this.username, this.password).subscribe((response: any) => {
          if(response.success == "true"){
            localStorage.setItem('user_id', response[0].user_id);
            localStorage.setItem('fname', response[0].fname);
            localStorage.setItem('lname', response[0].lname);
            localStorage.setItem('username', response[0].username);

            this.router.navigate(['tabs/tab1']);
          }
          else{
            this.check_fields = "Username or password is incorrect"
          }
        });
      }
      
//
    }

    goRegister() {  
          this.router.navigate(['/register']);
      }
  ngOnInit() {

  }
  

}
