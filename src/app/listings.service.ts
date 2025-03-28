import { Injectable } from '@angular/core';
import { Listing } from './types';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' :'application/json'  //tells server that request body is json object
  })
}

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

  getListingById(id:string) :Observable<Listing>{
  return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id:string) : Observable<Listing>{
    return this.http.post<Listing>(`/api/listings/${id}/add-view`,
      {}, //body is null
      httpOptions
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`/api/users/12345/listings`);
  }

  deleteListing(id:string) :Observable<any>{   //used any because it doesn't return a listing observable
    return this.http.delete<any>(`/api/listings/${id}`);
  }

  createListing(name:string , description:string, price:number) :Observable<Listing>{
    return this.http.post<Listing>('/api/listings',{name,description,price},httpOptions); //url,body,headers
  }
}
