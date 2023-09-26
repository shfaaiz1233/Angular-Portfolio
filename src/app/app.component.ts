import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'f-angular-app';
  public active = "home"
  constructor(){}
  scrollToo(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth'})
  }
}
