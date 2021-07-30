import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {

   }
   register(userData:any):Observable<any>{
    return this._http.post("http://medical.mind-techs.com/api/auth/signUp" , userData)
  }
}
