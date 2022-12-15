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

  createAcc(username: string, password:string, fname:string, lname:string){
    const headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

    const options={
      headers: headers
    }


    const body = {
      "username": username,
      "fname": fname,
      "lname": lname,
      "password": password,
    }

    const response = this.http.post( this.base_url + "register.php",JSON.stringify(body) ,options);
    return response;
  }

  editProfile(user_id:number, username: string, password:string, fname:string, lname:string){
    const headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

    const options={
      headers: headers
    }


    const body = {
      "user_id": user_id,
      "username": username,
      "fname": fname,
      "lname": lname,
      "password": password,
    }

    const response = this.http.post( this.base_url + "register.php",JSON.stringify(body) ,options);
    return response;
  }

  addPost(user_id:number, title:string, image_URL:string, description:string){
    const headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

    const options={
      headers: headers
    }


    const body = {
      "user_id": user_id,
      "title": title,
      "image_URL": image_URL,
      "description": description,
    }

    const response = this.http.post( this.base_url + "add_post.php",JSON.stringify(body) ,options);
    return response;
  }

}
