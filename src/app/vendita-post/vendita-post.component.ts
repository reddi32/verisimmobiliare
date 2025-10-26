import { Component } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vendita-post',
  templateUrl: './vendita-post.component.html',
  styleUrls: ['./vendita-post.component.css']
})
export class VenditaPostComponent {

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) {}

  venditaPost$ : Observable<any> | undefined;

  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.venditaPost$ = this.contentfulService.getVenditaEntryById(id);

      }
    )
    console.log(this.venditaPost$);
  }

}
