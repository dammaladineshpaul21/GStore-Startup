import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-dash-bord-data',
  templateUrl: './dash-bord-data.component.html',
  styleUrls: ['./dash-bord-data.component.css']
})
export class DashBordDataComponent {
  @ViewChild('table') table: any; // ViewChild decorator to access the table element

  displayedColumns: string[] = ['orderId', 'customerId', 'storeId', 'orderDate', 'totalAmount'];
  dataSource!: MatTableDataSource<any>;
  filterValue: string = '';

  orderForm: FormGroup;
  filteredOrders: any[] = [];
  orders: any[] = [];
  value = 'Clear me';

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

    // Update data every 5 seconds
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.http.get<any[]>('http://localhost:4000/api/ordersdata'))
      )
      .subscribe(
        (response) => {
          this.dataSource.data = response;
          this.filteredOrders = response;
        },
        (error) => {
          console.log('Error fetching data from API:', error);
        }
      );
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

  applyFilter(event: any) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.filterValue = filterValue;
  }
  
  getFilteredOrders() {
    if (!this.filterValue) {
      return this.filteredOrders;
    }

    return this.filteredOrders.filter((item) => {
      // Perform your custom filtering logic here
      return (
        item.orderId.toLowerCase().includes(this.filterValue) ||
        item.customerId.toLowerCase().includes(this.filterValue) ||
        item.storeId.toLowerCase().includes(this.filterValue) ||
        item.orderDate.toLowerCase().includes(this.filterValue) ||
        item.totalAmount.toLowerCase().includes(this.filterValue)
      );
    });
  }

  downloadAsPDF() {
    const doc = new jsPDF();
  
    // Get the HTML table element
    const table = this.table.nativeElement;
  
    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 page width in mm
      const pageHeight = (imgWidth / canvas.width) * canvas.height;
      const imgHeight = pageHeight;
      let position = 0;
  
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      position -= 1;
  
      // Save the PDF file
      doc.save('table_data.pdf');
    });
  }
}