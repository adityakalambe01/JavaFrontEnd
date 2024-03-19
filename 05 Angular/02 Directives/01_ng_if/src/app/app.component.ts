import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "aditya";
  showMessage: boolean = true;

  messageToggle(){
    this.showMessage = !this.showMessage;
  }
}
