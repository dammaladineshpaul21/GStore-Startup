import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component'
import { LoginFormComponent } from './login-form/login-form.component'


const routes: Routes = [
    { path: '', component: FormExampleComponent},
    { path: 'login-form', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }