import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private router: Router) {}  
    goTab1() {  
        this.router.navigate(['tabs/tab1']);
    }

    goRegister() {  
          this.router.navigate(['/register']);
      }
  ngOnInit() {
  }

}
