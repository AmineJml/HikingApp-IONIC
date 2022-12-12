import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }
   getImage(): Observable<any>{
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random');
  }

  getGender(name:string): Observable<any>{
    return this.http.get<any>('https://api.genderize.io?name=' + name);
  }

  getNationality(name:string): Observable<any>{
    return this.http.get<any>('https://api.nationalize.io/?name=' + name);
  }

  get_comments(): Observable<any>{
    return this.http.get<any>('https://localhost/hikingApp/BackEnd/get_comments.php?post_id=1');
  }

}
