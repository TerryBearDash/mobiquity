import { SelectYearComponent } from './pages/select-year/select-year.component';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import { CategorySelectComponent } from './pages/category-select/category-select.component';
import { IntroComponent } from './components/intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        IntroComponent,
        CategorySelectComponent,
        ResultsListComponent,
        SelectYearComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
