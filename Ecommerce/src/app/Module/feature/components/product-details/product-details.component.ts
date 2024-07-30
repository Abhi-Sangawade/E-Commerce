import { Component } from '@angular/core';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
    selectedSize:any;
    reviews=[1,1,1];
    reletedProducts:any;

    constructor(private router:Router){

    }
    ngOnInit(){
      this.reletedProducts=lehngacholiPage2;
    }
    
    handledAddToCart(){
      console.log('selected size is',this.selectedSize);
      this.router.navigate(['cart']);
    }
}
