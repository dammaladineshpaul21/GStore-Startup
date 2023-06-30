import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  showLoginForm: boolean = false;
  loginForm: FormGroup;
  errorMessage:string = ""

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const apiUrl = 'http://localhost:3000/api/login'; // replace with your backend API endpoint for login
      this.http.post(apiUrl, formData).subscribe(
        (response: any) => {
          // Login successful, perform any necessary actions
          console.log('Login successful');
          // Redirect to the desired page or perform other actions
          this.router.navigateByUrl('/grocery-dashbord');
        },
        (error: any) => {
          // Login failed, handle the error
          console.error('Login failed: ', error);
          // Display an error message to the user
          // For example, you can set a property in your component to show the error message in the template
          this.errorMessage = 'Invalid email or password';
        }
      );
    }
  }
}