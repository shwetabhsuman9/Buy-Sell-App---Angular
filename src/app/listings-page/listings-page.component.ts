import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {

  listings : Listing[] = [];
  constructor(
    private listingsService : ListingsService
  ) { }

  ngOnInit(): void {
    //when data is called from server we will subscribe to it and assign it to this.listings inside the callback fn()
     this.listingsService.getListings().subscribe(listings => this.listings = listings);
  }

}
