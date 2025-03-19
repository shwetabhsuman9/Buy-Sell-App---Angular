import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  listing: Listing | any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //accesing id from the URL
   const id  = this.route.snapshot.paramMap.get('id');

    this.listing = fakeListings.find(listing => listing.id === id);
  }

}
