import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-year',
  templateUrl: './select-year.component.html',
  styleUrls: ['./select-year.component.scss']
})
export class SelectYearComponent implements OnInit {

  results: any[] = [];

  constructor(
    private api: CategoriesService
  ) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.api.list('seasons').then((d: any) => {
      this.results = d.MRData.SeasonTable.Seasons;
    })
  }


}
