import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }
  
  lightbox:any;
  ngOnInit(){
          
             //lightbox settings
             this.lightbox = GLightbox({
              'href': 'https://www.youtube.com/watch?v=p6T9TN-bCO4&ab_channel=NoahPowell',
              'type': 'video',
              'source': 'youtube', //vimeo, youtube or local
              'width': 900,
              'autoplayVideos': true,
            });
}

}
