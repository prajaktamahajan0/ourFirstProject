import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-in-ng-switch2',
  templateUrl: './tab-in-ng-switch2.component.html',
  styleUrls: ['./tab-in-ng-switch2.component.scss']
})
export class TabInNgSwitch2Component implements OnInit {
selectedSkill : string = 'angular';
skillsArr : Array<string> = ['angular', 'React', 'Node', 'Express']
  constructor() { }

  ngOnInit(): void {
  }

}
