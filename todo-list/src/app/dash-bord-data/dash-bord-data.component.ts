import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dash-bord-data',
  templateUrl: './dash-bord-data.component.html',
  styleUrls: ['./dash-bord-data.component.scss']
})
export class DashBordDataComponent {
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      orderId: ['', Validators.required],
      customerId: ['', Validators.required],
      storeId: ['', Validators.required],
      orderDate: ['', Validators.required],
      totalAmount: ['', Validators.required]
    });
  }


  get orderId() {
    return this.orderForm.get('orderId');
  }

  get customerId() {
    return this.orderForm.get('customerId');
  }

  get storeId() {
    return this.orderForm.get('storeId');
  }

  get orderDate() {
    return this.orderForm.get('orderDate');
  }

  get totalAmount() {
    return this.orderForm.get('totalAmount');
  }

  submitOrder() {
    if (this.orderForm.valid) {
      // Code to handle form submission and inserting the order record
      console.log('Form submitted:', this.orderForm.value);
    }
  }
}
