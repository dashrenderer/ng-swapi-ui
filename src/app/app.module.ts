import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContainerComponent } from './containers/list/list.container';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AppComponent, ListContainerComponent, ThumbnailComponent, ListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
