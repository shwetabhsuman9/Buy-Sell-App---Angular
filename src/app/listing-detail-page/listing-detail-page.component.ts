import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';
@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  listing: Listing | any;
  isLoading: boolean = true;  //flag for displaying mesage when data is loading from server
  constructor(
    private route: ActivatedRoute,
    private listingsService : ListingsService
  ) { }

  ngOnInit(): void {

    //accesing id from the URL
   const id = this.route.snapshot.paramMap.get('id');

   if(id) {  // load data only when id! = null

    this.listingsService.getListingById(id).subscribe(listing =>{
      this.listing = listing;
      this.isLoading = false;
     });
  
     this.listingsService.addViewToListing(id).subscribe(() => console.log("Views Updated!"));

    }

   }
   

}
