import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'built_in_pipes';
  value: string = "Hello World!";
  currentDate : Date = new Date();
  amount: number = 99.99;
}
