import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseInvestorComponent } from './browse-investor.component';

describe('BrowseInvestorComponent', () => {
  let component: BrowseInvestorComponent;
  let fixture: ComponentFixture<BrowseInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseInvestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
