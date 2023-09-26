import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed = false;
  @Input() active: string = 'home';
  constructor(){
  }
  handleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  handleActive(input: string){
    this.active = input;

    setTimeout(() => {
      this.isCollapsed = false;
      let el = null;
      console.log(window.ElementInternals)
      if (this.active === 'home')
        el = document.getElementById('homepage')
      else if(this.active === 'about')
        el = document.getElementById('aboutpage')
      else if(this.active === 'projects')
        el = document.getElementById('projectspage')
      else if(this.active === 'skills')
        el = document.getElementById('skillspage')
      else if(this.active === 'education')
        el = document.getElementById('educationpage')
      else
        el = document.getElementById('contactpage')
      el?.scrollIntoView({block: 'start', behavior: 'smooth'})
    }, 500);

  }
}
