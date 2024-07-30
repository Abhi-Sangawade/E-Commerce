// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { mensShoesPage1 } from '../../../../../Data/men_shoes';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { menkurta } from '../../../../../Data/Men/men_kurta';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  menJeans:any
  womenGouns:any
  lenghaCholi:any
  menkurta:any
  mensShoes:any

  ngOnInit() {
    this.menJeans=menJeans.slice(0,4)
    this.womenGouns=gounsPage1.slice(0,4)
    this.lenghaCholi=lehngacholiPage2.slice(0,4)
    this.menkurta=menkurta.slice(0,4)
    this.mensShoes=mensShoesPage1.slice(0,4)
  }
}
