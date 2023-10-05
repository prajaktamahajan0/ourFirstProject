import { Component, OnInit } from '@angular/core';
import { ImobileProduct } from '../models/posts';
import { mobileProducts } from '../consts/products';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
mobilearray : Array<ImobileProduct> = []
  constructor() { }

  ngOnInit(): void {
    this.mobilearray = mobileProducts;
  }

}
