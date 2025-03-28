import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {

  listing: Listing | any;
  constructor(
    private router : Router,
    private route : ActivatedRoute,
        private listingsService : ListingsService
  ) { }

  ngOnInit(): void {
    //accesing id from the URL
   const id  = this.route.snapshot.paramMap.get('id');

   if(id) {  // load data only when id! = null

    this.listingsService.getListingById(id).subscribe(listing =>{
      this.listing = listing;                                              //Assiging value to the listing through getById
     });
   }

  }
  onSubmit({name, description, price}: { name: string; description: string; price: number }){
  this.listingsService.editListing(this.listing.id , name, description, price).subscribe(
    () => 
      {
        this.router.navigateByUrl('/my-listings');  //when operation completes redirect to my-listing page
        }
    
  )
  }
}
