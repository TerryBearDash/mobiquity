import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent implements OnInit {

  categories = [
    { slug: 'constructors', title: 'Constructor Information'},
    { slug: 'circuits', title: 'Circuit Information'},
    { slug: 'results', title: 'Race Results'},
    { slug: 'drivers', title: 'Driver Information'}
  ];

  year = '';

  constructor(
    private nav: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.nav.params.subscribe((d: any) => {
      console.log(d);
      this.year = d.year;
    })
  }

}
