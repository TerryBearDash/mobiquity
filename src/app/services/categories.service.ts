import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private api: ApiService
  ) { }

  list(apistring: string) {
    return this.api.list(`/${apistring}.json?limit=100`);
  }

  getbyyear(year: string, category: string) {
    return this.api.list(`/${year}/${category}.json?limit=100`);
  }

}
