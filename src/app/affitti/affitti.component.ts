import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
import { Meta } from '@angular/platform-browser';
import { query } from '@angular/animations';

@Component({
  selector: 'app-affitti',
  templateUrl: './affitti.component.html',
  styleUrls: ['./affitti.component.css']
})
export class AffittiComponent {

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute, private meta: Meta) {}

  affittiPosts$ : Observable<any> | undefined;

  attractionPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.affittiPosts$ = this.contentfulService.getAllAffittiEntries();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
        
      }
    )    
  }  
}
