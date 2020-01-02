import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private http: HttpClient) {  }

getData(): Observable<any> {

   return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
