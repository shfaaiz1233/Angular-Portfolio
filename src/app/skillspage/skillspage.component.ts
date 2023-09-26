import { Component } from '@angular/core';

@Component({
  selector: 'app-skillspage',
  templateUrl: './skillspage.component.html',
  styleUrls: ['./skillspage.component.css'],
})
export class SkillspageComponent {
  public skills = [
    {
      title: 'HTML',
      image:
      'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
    },
    {
      title: 'CSS',
      image:
        'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    },
    {
      title: 'JAVASCRIPT',
      image:
      'https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg'
    },
    {
      title: 'REACT JS',
      image:
        'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1',
    },
    {
      title: 'Angular JS',
      image:
        'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/angular-js-512.png'
    },
    {
      title: 'TAILWIND CSS',
      image:
        'https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png',
    },
    {
      title: 'NODE JS',
      image:
        'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png',
    },
    {
      title: 'MONGO DB',
      image: 'https://www.svgrepo.com/show/331488/mongodb.svg',
    },
    {
      title: 'GITHUB',
      image:
        'https://cdn.icon-icons.com/icons2/838/PNG/512/circle-github_icon-icons.com_66826.png',
    },
    {
      title: 'Python',
      image:
        'https://pnghq.com/wp-content/uploads/png-image-of-python-logo-no-text-included-7.png'
    },
    {
      title: 'C++',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png'
    },
    {
      title: 'C',
      image:
        'https://cdn.worldvectorlogo.com/logos/c-1.svg'
    },
    {
      title: 'SQL',
      image:
        'https://www.svgrepo.com/show/331760/sql-database-generic.svg'
    },
    {
      title: 'Image processing in Python',
      image: 'https://icon-library.com/images/python-icon/python-icon-18.jpg',
    },
    {
      title: 'Data Science in Python',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png'
    },
    {
      title: 'Machine Learning',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/Hey_Machine_Learning_Logo.png'
    },
  ];
  constructor() {}
  getSkills() {
    return this.skills;
  }
}
