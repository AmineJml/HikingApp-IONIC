import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  private base_url:string = "https://localhost/hikingApp/BackEnd/";

  constructor( private http: HttpClient) {}
  
  get_comments(): Observable<any>{
    return this.http.get<any>('https://localhost/hikingApp/BackEnd/get_comments.php?post_id=1');
  }

  login(username: string, password:string){
    const headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

    const options={
      headers: headers
    }


    const body = {
      "username": username,
      "password": password 
    }

    const response = this.http.post( this.base_url + "login.php",JSON.stringify(body) ,options);
    return response;
  }


}
