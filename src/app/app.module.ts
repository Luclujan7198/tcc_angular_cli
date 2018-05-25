import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModule,ButtonModule, SidebarModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutes } from './app.route';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { CarrouselComponent } from './layouts/carrousel/carrousel.component';


@NgModule({
  imports: [
    BrowserModule,
    SidebarModule,
    RouterModule.forRoot(AppRoutes,{ useHash: true }),
    CardModule,
    ButtonModule,
    
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    CarrouselComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
