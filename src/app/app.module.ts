import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeAppComponent } from './pages/exchange-app/exchange-app.component';
import { PanelComponent } from './pages/panel/panel.component';
import { ChartComponent } from './pages/chart/chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

//material imports
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { CurrencyTableComponent } from './pages/currency-table/currency-table.component';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    AppComponent,
    ExchangeAppComponent,
    PanelComponent,
    ChartComponent,
    CurrencyTableComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MatSliderModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
