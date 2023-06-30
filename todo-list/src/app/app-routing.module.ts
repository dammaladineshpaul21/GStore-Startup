import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { GroceryDashbordComponent } from './grocery-dashbord/grocery-dashbord.component'

const routes: Routes = [
    { path: '', component: FormExampleComponent},
    { path: 'login-form', component: LoginFormComponent},
    { path: 'grocery-dashbord', component: GroceryDashbordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }