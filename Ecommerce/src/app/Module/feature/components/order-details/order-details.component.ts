import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  orders=[1,1,1,1];
  steps=[
    {id:0,title:"PLACED",isCompletd:true},
    {id:1,title:"CONFIRMED",isCompletd:true},
    {id:2,title:"SHIPPED",isCompletd:false},
    {id:3,title:"DELIVERED",isCompletd:false}
  ]
}
