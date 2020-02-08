import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  one: Boolean = true;
  two: Boolean = false;
  three: Boolean = false;

  constructor() { }


  ngOnInit() {
  }

  stepOne(){
    this.one = true;
    this.two = false;
    this.three = false;
  }

  stepTwo(){
    this.one = false;
    this.two = true;
    this.three = false;
  }

  stepThree(){
    this.one = false;
    this.two = false;
    this.three = true;
  }




  

}
