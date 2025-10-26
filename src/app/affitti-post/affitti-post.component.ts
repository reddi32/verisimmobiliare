import { Component } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-affitti-post',
  templateUrl: './affitti-post.component.html',
  styleUrls: ['./affitti-post.component.css']
})
export class AffittiPostComponent {

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) {}
  
    affittiPost$ : Observable<any> | undefined;
  
    ngOnInit(): void {
  
      this.route.params.subscribe(
        params => {
          const id = params['id'];
          this.affittiPost$ = this.contentfulService.getAffittiEntryById(id);
  
        }
      )
      console.log(this.affittiPost$);
    }

}
