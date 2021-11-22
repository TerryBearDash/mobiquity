import { CategoriesService } from 'src/app/services/categories.service';
import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorySelectComponent } from './pages/category-select/category-select.component';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import { IntroComponent } from './components/intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckDriverComponent } from './pages/check-driver/check-driver.component';
import { SelectYearComponent } from './pages/select-year/select-year.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectComponent,
    ResultsListComponent,
    IntroComponent,
    CheckDriverComponent,
    SelectYearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
