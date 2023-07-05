import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dash-bord-data',
  templateUrl: './dash-bord-data.component.html',
  styleUrls: ['./dash-bord-data.component.scss']
})
export class DashBordDataComponent {
  orderForm: FormGroup;
  filteredOrders: any[] = [];
  orders: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.orderForm = this.formBuilder.group({
      orderId: ['', Validators.required],
      customerId: ['', Validators.required],
      storeId: ['', Validators.required],
      orderDate: ['', Validators.required],
      totalAmount: ['', Validators.required]
    });

    this.getDataFromApi(); 
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
          console.log("Updated Order Details As A New Record")
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
          this.orders = response;
          console.log(this.orders);
        },
        (error) => {
          console.log('Error fetching data from API:', error);
        }
      );
  }
}