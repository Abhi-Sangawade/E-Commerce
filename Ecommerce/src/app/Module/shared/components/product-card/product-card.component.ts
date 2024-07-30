import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  
  constructor(private router:Router){

  }

  navigate(path:string){
    this.router.navigate(['product-details/${5}']);
}
  
  
  @Input()
    product:any
}
