import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-read-only-fields',
  templateUrl: './custom-read-only-fields.component.html',
  styleUrls: ['../custom.css']
})
export class CustomReadOnlyFieldsComponent implements OnInit {

  constructor() { }

  options = {}

  ngOnInit(): void {

    let temp = {
      "options": {
        "checkout": {
          "readonly": {
            "email": "1",
            "contact": "1"
          }
        }
      }
    }

    this.options = JSON.stringify(temp, undefined, 4)
  }

}
