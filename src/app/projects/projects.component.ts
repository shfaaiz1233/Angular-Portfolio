import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Movie Streaming Web Application',
      desc: 'Implemented a movie streaming web application using React JS, Express JS, Node JS, Mongo DB.',
    },
    {
      title: 'Gym Exercise Prediction',
      desc: 'Implemented a data science project in python using a dataset from Kaggle. The dataset was collected by Gyroscopes and accelerometer in wrist watches. Cleaned the data and built a single useful dataframe from that data. Trained the model using KNN model.',
    },

    {
      title: 'Hospital Management System',
      desc: 'Implemented a Hospital Management System in python and integrated it with SQL data base. Admin can add/fetch records of patients using the system. Developed a graphical user interface for hospital personnel which solved the problem of manual data entry and saved the time.',
    },
    {
      title: 'Rice Quality Assurance Software',
      desc: 'Implemented an image processing project in python. It calculates the size of each rice in the picture and stores all the details in excel files. Created a dataset for diff erent types of rice that can be further used for building ML models.',
    },
    {
      title: 'Digit Classification by Image',
      desc: 'Implemented a Machine Learning model that predicts the digit by an image. Deployed a web application built in react and used Flask for API service',
    },
    {
      title: '2 Player Chess Game',
      desc: 'Implemented a 2 player chess game in C++ using object oriented programming.',
    },
  ];
}
