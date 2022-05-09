import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollStart(){
    var my_element = document.getElementById('home');
    if(my_element==null) return;
    my_element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });
  }
}
