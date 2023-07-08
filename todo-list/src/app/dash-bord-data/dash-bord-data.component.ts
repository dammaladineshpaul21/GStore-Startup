import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';



@Component({
  selector: 'app-dash-bord-data',
  templateUrl: './dash-bord-data.component.html',
  styleUrls: ['./dash-bord-data.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  // standalone: true,
})
export class DashBordDataComponent {
  displayedColumns: string[] = ['orderId', 'customerId', 'storeId', 'orderDate', 'totalAmount'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  orderForm: FormGroup;
  filteredOrders: any[] = [];
  orders: any[] = [];
  value = 'Clear me';

  // dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  //   // Only highligh dates inside the month view.
  //   if (view === 'month') {
  //     const date = cellDate.getDate();

  //     // Highlight the 1st and 20th day of each month.
  //     return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  //   }
  //   return '';
  // };


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    
  ) {
    this.orderForm = this.formBuilder.group({
      orderId: ['', Validators.required],
      customerId: ['', Validators.required],
      storeId: ['', Validators.required],
      orderDate: ['', Validators.required],
      totalAmount: ['', Validators.required]
    });

    this.dataSource = new MatTableDataSource<any>();
    this.getDataFromApi();
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
  }


  submitOrder() {
    if (this.orderForm.invalid) {
      return;
    }

    const filterParams = this.orderForm.value;
    this.fetchFilteredOrders(filterParams);
  }

  fetchFilteredOrders(filterParams: any) {
    const apiUrl = 'http://localhost:4000/api/orders'; // Replace with your API endpoint URL

    this.http.post<any[]>(apiUrl, filterParams)
      .subscribe(
        (response) => {
          this.filteredOrders = response;
          console.log('Updated Order Details As A New Record');
        },
        (error) => {
          console.log('Error fetching filtered orders:', error);
        }
      );
  }

  // Fetch data from the API
  getDataFromApi() {
    const apiUrl = 'http://localhost:4000/api/ordersdata';

    this.http.get<any[]>(apiUrl)
      .subscribe(
        (response) => {
          this.dataSource.data = response; // Set the data to the dataSource
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log('Error fetching data from API:', error);
        }
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}