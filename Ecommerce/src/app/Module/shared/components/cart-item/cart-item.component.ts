import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  @Input()
  showButton:any

  updateCartItem(num:number){
    console.log("num",num);
  }
  removeCartItem(){
    console.log("remove Cart Item")
  }

}