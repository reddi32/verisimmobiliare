import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
import { Meta } from '@angular/platform-browser';
import { query } from '@angular/animations';


@Component({
  selector: 'app-vendita',
  templateUrl: './vendita.component.html',
  styleUrls: ['./vendita.component.css']
})
export class VenditaComponent {

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute, private meta: Meta) {}

  venditaPosts$ : Observable<any> | undefined;

  attractionPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.venditaPosts$ = this.contentfulService.getAllVenditaEntries();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
        
      }
    )    
  
  }

}
