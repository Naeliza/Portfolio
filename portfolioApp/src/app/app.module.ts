import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { HomeSubpageComponent } from './main/home-subpage/home-subpage.component';

import { SharedModule } from './shared/shared.module';
import { InfoListComponent } from './main/info-list/info-list.component';
import { ResumeComponent } from './main/resume/resume.component';
import { EducationComponent } from './main/education/education.component';
import { KnowledgeComponent } from './main/knowledge/knowledge.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeSubpageComponent,
    InfoListComponent,
    ResumeComponent,
    EducationComponent,
    KnowledgeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
