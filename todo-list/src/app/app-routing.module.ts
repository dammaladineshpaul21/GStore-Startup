import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { GroceryDashbordComponent } from './grocery-dashbord/grocery-dashbord.component';
import { DashBordDataComponent } from './dash-bord-data/dash-bord-data.component';
import { CategoryDataComponent } from './category-data/category-data.component';
// import { DairyBreakfastComponent } from './category-data/allcategorylist/dairy-breakfast/dairy-breakfast.component';


const routes: Routes = [
    { path: '', component: FormExampleComponent},
    { path: 'login-form', component: LoginFormComponent},
    { path: 'grocery-dashbord', component: GroceryDashbordComponent},
    { path: 'dash-bord-data', component: DashBordDataComponent},
    { path: 'category-data', component: CategoryDataComponent},
    // { path: 'dairy-breakfast', component: DairyBreakfastComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }