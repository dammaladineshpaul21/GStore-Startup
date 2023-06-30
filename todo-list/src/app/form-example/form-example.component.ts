import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  myForm: FormGroup;
  errorMessage: string = "";
  // formFields = [
  //   { id: 'customer-id', name: 'customerId', label: 'Customer ID', errorMessage: 'Customer ID is required.' },
  //   { id: 'first-name', name: 'firstName', label: 'First Name', errorMessage: 'First Name is required.' },
  //   { id: 'last-name', name: 'lastName', label: 'Last Name', errorMessage: 'Last Name is required.' },
  //   { id: 'email', name: 'email', label: 'Email', errorMessage: 'Email is required.' },
  //   { id: 'phone-number', name: 'phoneNumber', label: 'Phone_number', errorMessage: 'Phone_number is required.' },
  //   { id: 'person-address', name: 'address', label: 'Address', errorMessage: 'Address is required.' }
  // ]; 

  // constructor(private formBuilder: FormBuilder, private http: HttpClient){}

  // ngOnInit(){
  //   this.myForm = this.formBuilder.group({
  //     customerId: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phoneNumber: ['', Validators.required],
  //     address: ['', Validators.required]
  //   });
  // }


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    // private acitvate: ActivatedRoute,
    private router: Router

  ) {
    this.myForm = this.formBuilder.group({
      customerId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      reenterpassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      const apiUrl = 'http://localhost:3000/api/data';
      this.http.post(apiUrl, formData).subscribe(
        () => {
          console.log('Data inserted successfully');
          this.errorMessage = ''; // Clear any previous error message
        },
        error => {
          console.error('Error inserting data: ', error);
          this.errorMessage = 'Email, phone number, or customer ID already exists';
          window.alert(this.errorMessage);
        }
      );
    }
  }

  onLoginPage(){
    this.router.navigateByUrl('/login-form');
  }
}

