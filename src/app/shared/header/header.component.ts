import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollInto(id: string){
    var my_element = document.getElementById(id);
    if(my_element==null) return;
    my_element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });
  }
}
