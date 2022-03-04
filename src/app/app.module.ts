import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericService } from './src/app/services/generic.service';
import { MainViewComponent } from './src/app/components/main-view/main-view.component';
import { ChildView1Component } from './src/app/components/child-view1/child-view1.component';
import { ChildView2Component } from './src/app/components/child-view2/child-view2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ChildView1Component,
    ChildView2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
