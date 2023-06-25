import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      control1: ['', Validators.required],
      control2: ['', Validators.email]
    });
  }


  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Perform further actions with the form data
    }
  }

}
