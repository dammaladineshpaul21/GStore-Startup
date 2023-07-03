import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormExampleComponent } from './form-example/form-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { GroceryDashbordComponent } from './grocery-dashbord/grocery-dashbord.component';
import { DashBordDataComponent } from './dash-bord-data/dash-bord-data.component';
import { CategoryDataComponent } from './category-data/category-data.component'; // CLI imports AppRoutingModule


@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    LoginFormComponent,
    GroceryDashbordComponent,
    DashBordDataComponent,
    CategoryDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
