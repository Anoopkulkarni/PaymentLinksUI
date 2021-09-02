import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-payment-methods',
  templateUrl: './custom-payment-methods.component.html',
  styleUrls: ['../custom.css']
})
export class CustomPaymentMethodsComponent implements OnInit {

  constructor() { }

  options = {}

  ngOnInit(): void {

    let temp = {
      "options": {
        "checkout": {
          "method": {
            "netbanking": "1",
            "card": "1",
            "upi": "0",
            "wallet": "0"
          }
        }
      }
    }

    this.options = JSON.stringify(temp, undefined, 4)


  }

}
