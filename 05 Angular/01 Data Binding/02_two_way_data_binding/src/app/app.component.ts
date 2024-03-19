import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template : `
    <h1>Two Way Data Binding</h1>
    <input [(ngModel)] = 'name' placeholder="Enter your name">
    <p> Welcome {{name}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';
}
