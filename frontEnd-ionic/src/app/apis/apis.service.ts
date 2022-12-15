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
  
  get_post_id(post_id:any): Observable<any>{
    return this.http.get<any>('https://localhost/hikingApp/BackEnd/get_post_id.php?post_id=' + post_id);
  }
  get_username(user_id:any): Observable<any>{
    return this.http.get<any>('https://localhost/hikingApp/BackEnd/get_comments.php?user_id=' + user_id);
  }
  // get_comments(post_id:any): Observable<any>{
  //   return this.http.get<any>('https://localhost/hikingApp/BackEnd/get_comments.php?post_id=' + post_id);
  // }
  // get_comments(post_id:any): Observable<any>{
  //   return this.http.get<any>('https://localhost/hikingApp/BackEnd/get_comments.php?post_id=' + post_id);
  // }

  getPosts(): Observable<any>{
    return this.http.get<any>(this.base_url + "/get_posts.php");
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

  editProfile(user_id:any, username: string, password:string, fname:string, lname:string){
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

  addPost(user_id:any, title:string, image_URL:string, description:string){
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
