import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent }   from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data.service';
import { HttpService } from './http.service';

@NgModule({
	declarations: [ AppComponent ],
    imports:      [ BrowserModule, HttpClientModule,  FlexLayoutModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})],     
    providers: [HttpService],
    bootstrap:    [ AppComponent ] 
})
export class AppModule { }