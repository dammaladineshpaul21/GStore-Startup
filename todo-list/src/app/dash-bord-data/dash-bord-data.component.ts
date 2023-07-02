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
  }

  submitOrder() {
    if (this.orderForm.invalid) {
      return;
    }

    const filterParams = this.orderForm.value;
    this.fetchFilteredOrders(filterParams);
  }

  fetchFilteredOrders(filterParams: any) {
    const apiUrl = 'http://localhost:3000/api/orders';
    const params = new HttpParams({ fromObject: filterParams });

    this.http.get<any[]>(apiUrl, { params })
      .subscribe(
        (response) => {
          this.filteredOrders = response;
        },
        (error) => {
          console.log('Error fetching filtered orders:', error);
        }
      );
  }
}