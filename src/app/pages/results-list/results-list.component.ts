import { CategoriesService } from 'src/app/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {

  results: any[] = [];
  category = '';
  year = '';

  constructor(
    private api: CategoriesService,
    private nav: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.nav.params.subscribe((d: any) => {
      console.log(d);
      this.category = d.category;
      this.year = d.year;
      this.list(d.year, d.category);
    })
  }

  list(year: string, category: string) {
    this.api.list(`${year}/${category}`).then((d: any) => {
      switch(this.category) {
        case 'constructors': {
          this.results = d.MRData.ConstructorTable.Constructors;
          break;
        }
        case 'circuits': {
          this.results = d.MRData.CircuitTable.Circuits;
          break;
        }
        case 'results': {
          this.results = d.MRData.RaceTable.Races;
          break;
        }
        case 'drivers': {
          this.results = d.MRData.DriverTable.Drivers;
          break;
        }
        default:
          break;
      }
    })
  }

}
