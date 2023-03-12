import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBusinessComponent } from './browse-business.component';

describe('BrowseBusinessComponent', () => {
  let component: BrowseBusinessComponent;
  let fixture: ComponentFixture<BrowseBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
