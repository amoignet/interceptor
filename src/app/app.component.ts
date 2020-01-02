import { Component, OnInit } from '@angular/core';
import { InterceptorService } from './interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TDD1';
  response;
   constructor(private interceptorService: InterceptorService ) { }

  ngOnInit() {
    this.interceptorService.getData().subscribe((data) => {
      this.response = data;
      console.log(data);
    });
  }
}
