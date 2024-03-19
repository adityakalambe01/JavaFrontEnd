import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.less']
})
export class EventBindingComponent {
    onButtonClick(){
      console.log("Button is Clicked");
    }

  onKeyUp(event : any) {
    console.log(" Key is Pressed: ", event.key);
  }
}
