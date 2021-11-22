import { SelectYearComponent } from './pages/select-year/select-year.component';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorySelectComponent } from './pages/category-select/category-select.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'year',
    pathMatch: 'full'
  },
  { path: 'year', component: SelectYearComponent },
  { path: 'category/:year', component: CategorySelectComponent },
  { path: 'result/:year/:category', component: ResultsListComponent },
  { path: '**', redirectTo: 'year'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
