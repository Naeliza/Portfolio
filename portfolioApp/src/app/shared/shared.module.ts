import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { TreeComponent } from './tree/tree.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LinkedinComponent,
    BannerComponent,
    TreeComponent

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LinkedinComponent,
    BannerComponent,
    TreeComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
