import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.less']
})
export class PropertyBindingComponent {
  isDisables= true;

  getInitialValue() {
    return "Initial Value";
  }
}
