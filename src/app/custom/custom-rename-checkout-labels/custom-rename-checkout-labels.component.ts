import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-rename-checkout-labels',
  templateUrl: './custom-rename-checkout-labels.component.html',
  styleUrls: ['../custom.css']
})
export class CustomRenameCheckoutLabelsComponent implements OnInit {

  constructor() { }

  options = {}

  ngOnInit(): void {

    let temp = {
      "options": {
        "checkout": {
          "partial_payment": {
            "min_amount_label": "Minimum Money to be paid",
            "partial_amount_label": "Pay in parts",
            "partial_amount_description": "Pay at least ₹100",
            "full_amount_label": "Pay the entire amount"
          }
        }
      }
    }

    this.options = JSON.stringify(temp, undefined, 4)
  }

}
