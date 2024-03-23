import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    })
  }

  submitForm() {
    console.log("Form Submitted");
  }
}
