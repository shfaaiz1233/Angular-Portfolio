import { Component } from '@angular/core';

@Component({
  selector: 'app-educationpage',
  templateUrl: './educationpage.component.html',
  styleUrls: ['./educationpage.component.css']
})
export class EducationpageComponent {
  educationArray = [
    {
      degree: "BSCS",
      cgpa: 3.7,
      institute: "University Of Central Punjab",
      curryear: "2020 - Present (Currently in 7th semester)",
    },
    {
      degree: "FSC",
      cgpa: "76%",
      institute: "Punjab Group Of Colleges",
      curryear: "2018 - 2020",
    },
    {
      degree: "Matric",
      cgpa: "81%",
      institute: "Pakistan International Progressive High School",
      curryear: "2016 - 2018",
    },
  ];
  certificationsArray = [
    {
      certificate: "Foundations of Data Science",
      source: "Coursera, Google",
      specialization: "Google Advanced Data Analytics",
    },
    {
      certificate: "Get Started with Python",
      source: "Coursera, Google",
      specialization: "Google Advanced Data Analytics",
    },
    {
      certificate: "Go Beyond the Numbers: Translate Data into Insights",
      source: "Coursera, Google",
      specialization: "Google Advanced Data Analytics",
    },
    {
      certificate: "Supervised Machine Learning: Regression and Classification",
      source: "Coursera, Deeplearning.ai",
      specialization: "Machine Learning Specialization"
    }
  ];

}
