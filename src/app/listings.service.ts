import { Injectable } from '@angular/core';
import { Listing } from './types';
import { fakeListings } from './fake-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http :HttpClient
  ) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');  //emmiting for component to subscribe
  }
}
