import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModule,ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutes } from './app.route';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    BrowserModule,

    RouterModule.forRoot(AppRoutes,{ useHash: true }),
    CardModule,
    ButtonModule,
    
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
