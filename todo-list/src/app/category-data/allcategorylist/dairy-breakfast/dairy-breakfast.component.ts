import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



interface DairyBreakfastItem {
  id: number;
  itemname: string;
  Quality: string;
  Brand: string;
  Environmental: string;
  expire: Date;
  Price: number;
}

@Component({
  selector: 'app-dairy-breakfast',
  templateUrl: './dairy-breakfast.component.html',
  styleUrls: ['./dairy-breakfast.component.css']
})
export class DairyBreakfastComponent implements OnInit {
  dataForm: FormGroup;
  tableData: DairyBreakfastItem[] = [];

  constructor(private http: HttpClient) {
    this.dataForm = new FormGroup({
      itemname: new FormControl('', Validators.required),
      quality: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      environmental: new FormControl('', Validators.required),
      expire: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.fetchTableData(); // Fetch initial table data
    setInterval(() => {
      this.fetchTableData(); // Fetch table data every 5 seconds
    }, 5000);
  }

  submitForm() {
    if (this.dataForm.valid) {
      // Get the form data
      const formData = this.dataForm.value;
      const url = 'http://localhost:5000/api/dairy-breakfast-order';

      // Perform POST request to send the data
      this.http.post(url, formData).subscribe(
        (response) => {
          // Handle success response
          console.log('Data sent successfully!', response);
        },
        (error) => {
          // Handle error response
          console.error('Error sending data:', error);
        }
      );
    }
  }

  fetchTableData() {
    const url = 'http://localhost:5000/api/dairy-breakfast-order';

    // Perform GET request to fetch table data
    this.http.get<DairyBreakfastItem[]>(url).subscribe(
      (data) => {
        // Handle success response
        console.log('Table data retrieved successfully!', data);
        this.tableData = data;
      },
      (error) => {
        // Handle error response
        console.error('Error retrieving table data:', error);
      }
    );
  }
}