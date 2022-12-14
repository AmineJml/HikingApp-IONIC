import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

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
    constructor(private router: Router) {}  
    goTab1() {  
        this.router.navigate(['login']);
    }
  ngOnInit() {
  }

}
