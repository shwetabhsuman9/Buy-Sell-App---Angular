import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  listing :Listing |any;
  email : string = '';
  message : string = '';
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private listingsService : ListingsService
  ) { }

  ngOnInit(): void {
     //accesing id from the URL
       const id  = this.route.snapshot.paramMap.get('id');
    
       if(id) {

        this.listingsService.getListingById(id).subscribe(listing =>{
          this.listing = listing;
          this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;
         });

       }
     
      }

      sendMessage() : void {
        if(this.email){
          alert('Your message has been sent');
          this.router.navigateByUrl('/listings');
        }
      }

}
