import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shares/navbar/navbar.component';
import { UserInterceptor } from './providers/user.interceptor';
import { EditComponent } from './userprofile/edit/edit.component';
import { EditfilesComponent } from './userprofile/editfiles/editfiles.component';
import { LoadreservationComponent } from './userprofile/loadreservation/loadreservation.component';
import { AdddependentComponent } from './pages/userprofile/dependent/adddependent/adddependent.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { PaginationComponent } from './pagination/pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    EditComponent,
    EditfilesComponent,
    LoadreservationComponent,
    AdddependentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    // PaginationComponent,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), TabsModule.forRoot(), // ToastrModule added
    TabsModule.forRoot()
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:UserInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
