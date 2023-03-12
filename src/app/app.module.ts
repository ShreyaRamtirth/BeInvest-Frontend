import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SponserComponent } from './sponser/sponser.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { BrowseBusinessComponent } from './browse-business/browse-business.component';
import { BrowseInvestorComponent } from './browse-investor/browse-investor.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TestimonialComponent,
    SponserComponent,
    AboutUsComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    BrowseBusinessComponent,
    BrowseInvestorComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
