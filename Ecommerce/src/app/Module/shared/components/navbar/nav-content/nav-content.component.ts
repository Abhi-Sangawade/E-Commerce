import { Component,Input } from '@angular/core';
import { navigation } from './nav-content';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.css'
})
export class NavContentComponent {
  category:any;

  @Input()
   selectedSection:any;

   ngOnInit(){
    this.category=navigation;

    console.log("Selected Section",this.selectedSection);
   }
}