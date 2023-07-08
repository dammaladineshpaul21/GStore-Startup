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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
// import { DairyBreakfastComponent } from './category-data/allcategorylist/dairy-breakfast/dairy-breakfast.component';


@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    LoginFormComponent,
    GroceryDashbordComponent,
    DashBordDataComponent,
    CategoryDataComponent,
    // DairyBreakfastComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatIconModule,
    IonicModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
