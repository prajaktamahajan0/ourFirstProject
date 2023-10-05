import { Component } from '@angular/core';
import { Iperson } from './models/person';
import { Isubjects } from "./models/person";
import { Istudents } from "./models/person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourFirstProject';
  showheading: boolean = true;

  skills: Array<string> = ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "React.js", "Node.js"];

  likes : Array<string> = ["Festival is Diwali.", "King is Shivaji Maharaj.", "Animal is Cow.", "National hero is Mahatma Gandhi."];

  movies : Array<string> = ["Movies.", "Monsoon Season.", "Myself.", "Ice-Cream."]

  persons: Array<Iperson> = [
    {
      fname: "Jhon",
      lname: "Doe",
      contact: 1234567890,
      email: "jd@gmail.com"
    },
    {
      fname: "Jhoe",
      lname: "Doe",
      contact: 9876543211,
      email: "jd@gmail.com"
    },
    {
      fname: "Juyi",
      lname: "Doe",
      contact: 9876543210,
      email: "jd@gmail.com"
    },
    {
      fname: "jelly",
      lname: "Doe",
      contact: 890765432,
      email: "jd@gmail.com"
    },
  ]

  subjects : Array<Isubjects> = [
    {
       gender : "F",
       subjects : "history",
       marks : 70,
       grade : "A",
    },
    {
      gender : "M",
      subjects : "maths",
      marks : 80,
      grade : "B"
   },
   {
    gender : "F",
    subjects : "science",
    marks : 90,
    grade : "A"
 },
 {
  gender : "M",
  subjects : "english",
  marks : 100,
  grade : "A"
}
  ]

  student : Array<Istudents> = [
    {
      fname : "david",
      age : 22,
      percentage : "80%",
    },
    {
      fname : "raman",
      age : 28,
      percentage : "80%",
    },
    {
      fname : "titus",
      age : 24,
      percentage : "80%",
    }, 
    {
      fname : "john",
      age : 20,
      percentage : "80%",
    },
  ]

  constructor() {

  }
  
  onToggle() {
    console.log("Btn Clicked")
    this.showheading = !this.showheading
  }
}
