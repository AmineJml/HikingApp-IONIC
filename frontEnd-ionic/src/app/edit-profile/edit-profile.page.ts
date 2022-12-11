import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

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
