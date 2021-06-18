import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { EducationComponent } from './main/education/education.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ContactComponent } from './shared/contact/contact.component';
import { LinkedinComponent } from './shared/linkedin/linkedin.component';
import { BannerComponent } from './shared/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    EducationComponent,
    AboutMeComponent,
    ContactComponent,
    LinkedinComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
