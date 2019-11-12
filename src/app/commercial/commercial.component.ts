import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  setNewColors(){
    document.documentElement.style.setProperty('--my-primary-color', 'white');
    document.documentElement.style.setProperty('--my-primary-bg', 'black');
    console.log('setNewColors');
  }

  resetColors(){
    document.documentElement.style.setProperty('--my-primary-color', '#eeeee7');
    document.documentElement.style.setProperty('--my-primary-bg', '#0f3193');
    console.log('resetColors');
  }

}
