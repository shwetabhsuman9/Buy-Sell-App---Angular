import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';
@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent implements OnInit {
listings : Listing[] = [];
  constructor(
     private listingsService : ListingsService
  ) { }

  ngOnInit(): void {
    this.listingsService.getListingsForUser().subscribe(listings => this.listings = listings);
  }

  
  onDeleteClicked(listingId:string){

    this.listingsService.deleteListing(listingId).subscribe(
      ()=> {
      this.listings = this.listings.filter(    //filtering out listing which are deleted and only display remaining ones
        listing => listing.id !== listingId
      );
    });
    }
}
