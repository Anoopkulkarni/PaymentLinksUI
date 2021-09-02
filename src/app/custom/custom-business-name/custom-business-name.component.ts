import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-business-name',
  templateUrl: './custom-business-name.component.html',
  styleUrls: ['../custom.css']
})
export class CustomBusinessNameComponent implements OnInit {

  constructor() { }

  options = {}

  ngOnInit(): void {

    let temp = {
      "options": {
        "checkout": {
          "name": "Acme Corp"
        }
      }
    }

    this.options = JSON.stringify(temp, undefined, 4)


  }



}
