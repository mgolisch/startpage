import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {LinkListComponent} from './linklist.component';
import {CreateLinkComponent} from './createlink.component'
import {ClockComponent } from './clock.component'
import {CreateCategoryComponent} from './createcategory.component'
import { routing,
         appRoutingProviders }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing , FormsModule,HttpModule],
  declarations: [ AppComponent, LinkListComponent, CreateLinkComponent, ClockComponent, CreateCategoryComponent ],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }