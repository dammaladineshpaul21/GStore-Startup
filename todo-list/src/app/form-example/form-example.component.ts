import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.myForm = this.formBuilder.group({
      control1: ['', Validators.required],
      control2: ['', Validators.email]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      const apiUrl = 'http://localhost:3000/api/data';
      this.http.post(apiUrl, formData).subscribe(
        response => {
          console.log('Data inserted successfully');
        },
        error => {
          console.error('Error inserting data: ', error);
        }
      )
    }
  }
}

