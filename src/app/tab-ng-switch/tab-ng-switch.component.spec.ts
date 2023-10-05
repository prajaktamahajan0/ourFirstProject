import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgSwitchComponent } from './tab-ng-switch.component';

describe('TabNgSwitchComponent', () => {
  let component: TabNgSwitchComponent;
  let fixture: ComponentFixture<TabNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
