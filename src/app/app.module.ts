import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { ThumbnailSectionComponent } from './components/thumbnail-section/thumbnail-section.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { DetailContainerComponent } from './containers/detail/detail.container';
import { ListContainerComponent } from './containers/list/list.container';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    ThumbnailComponent,
    ListComponent,
    ThumbnailSectionComponent,
    DetailContainerComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
