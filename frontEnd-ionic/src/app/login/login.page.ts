import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ApisService } from '../apis/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  commentTest='';

  constructor(private apiService:ApisService, private router:Router) {}
    login() {  
      this.apiService.login("test1", "test1").subscribe((response: any) => {
      this.commentTest = response;
      console.log(this.commentTest);
     });

        this.router.navigate(['tabs/tab1']);
    }

    goRegister() {  
          this.router.navigate(['/register']);
      }
  ngOnInit() {
  
  }

}
