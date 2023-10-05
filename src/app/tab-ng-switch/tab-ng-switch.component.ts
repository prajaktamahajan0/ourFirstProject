import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ng-switch',
  templateUrl: './tab-ng-switch.component.html',
  styleUrls: ['./tab-ng-switch.component.scss']
})
export class TabNgSwitchComponent implements OnInit {
  price: string = '20';
  tabHeadings = [
    "5", "20", "50"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
