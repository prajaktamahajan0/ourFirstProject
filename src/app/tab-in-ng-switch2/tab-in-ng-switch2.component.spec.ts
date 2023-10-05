import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInNgSwitch2Component } from './tab-in-ng-switch2.component';

describe('TabInNgSwitch2Component', () => {
  let component: TabInNgSwitch2Component;
  let fixture: ComponentFixture<TabInNgSwitch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabInNgSwitch2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabInNgSwitch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
