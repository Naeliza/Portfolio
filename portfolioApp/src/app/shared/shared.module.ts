import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoadingAnimationComponent

  ],
  exports: [
    HeaderComponent,
    LoadingAnimationComponent,
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
