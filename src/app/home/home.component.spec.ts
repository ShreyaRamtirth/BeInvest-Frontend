import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HeroComponent } from '../hero/hero.component';
import { SponserComponent } from '../sponser/sponser.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, HeroComponent, TestimonialComponent, SponserComponent, AboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
