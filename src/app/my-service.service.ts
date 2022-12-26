import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8888';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  constructor(private http: HttpClient) { }

   public get(url: string): Observable<any> {
    return this.http.get(API_URL  + url).pipe(map(res => res));
  }
  public post(url: string, fraudIntakeMaster : any, files: any): Observable<any> {
    const obj = {
       
        fraudIntakeMaster,
      valueMap:{}
      
     // "fraud-intake-master-file": files
    }

     return this.http.post(API_URL  + url , obj).pipe(map(res => res));
  }

}
