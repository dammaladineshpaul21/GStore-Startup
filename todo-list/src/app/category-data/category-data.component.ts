import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Banner {
  image: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-category-data',
  templateUrl: './category-data.component.html',
  styleUrls: ['./category-data.component.css']
})
export class CategoryDataComponent {
  banners: Banner[] = [
    {
      image: 'category-image/fresh-produce1.png',
      title: 'Fresh Produce',
      link: 'https://www.silocreativo.com/en/showcase/'
    },
    {
      image: 'https://i.pinimg.com/originals/f2/d1/f9/f2d1f900f688ddca0765ec8e2d3900e1.png',
      title: 'Dairy and Eggs',
      link: 'https://www.silocreativo.com/en/showcase/'
    },
    {
      image: 'https://i.pinimg.com/originals/f2/d1/f9/f2d1f900f688ddca0765ec8e2d3900e1.png',
      title: 'Meat and Poultry',
      link: 'https://www.silocreativo.com/en/showcase/'
    },
    {
      image: 'https://i.pinimg.com/originals/f2/d1/f9/f2d1f900f688ddca0765ec8e2d3900e1.png',
      title: 'Seafood',
      link: 'https://www.silocreativo.com/en/showcase/'
    }
  ];
  
}
  // productForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   this.productForm = this.formBuilder.group({
  //     item: ['', Validators.required],
  //     brand: ['', Validators.required],
  //     quantity: [null, Validators.min(0)],
  //     packNo: [''],
  //     price: [null, Validators.min(0)],
  //     rating: [null, Validators.min(0)]
  //   });
  // }


  // onSubmit(): void {
  //   if (this.productForm.valid) {
  //     // Perform form submission or further processing
  //     console.log('Product form submitted:', this.productForm.value);

  //     // Reset the form after submission
  //     this.productForm.reset();
  //   } else {
  //     // Mark form controls as touched to display validation errors
  //     this.markFormControlsAsTouched(this.productForm);
  //   }
  // }

  // markFormControlsAsTouched(formGroup: FormGroup): void {
  //   Object.values(formGroup.controls).forEach(control => {
  //     if (control instanceof FormGroup) {
  //       this.markFormControlsAsTouched(control);
  //     } else {
  //       control.markAsTouched();
  //     }
  //   });
  // }
