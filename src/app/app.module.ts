import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { GalleryModule } from '@ngx-gallery/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule,
    FlexLayoutModule,
    // ImageViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }