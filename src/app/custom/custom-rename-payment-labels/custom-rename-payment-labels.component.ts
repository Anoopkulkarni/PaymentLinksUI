import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-rename-payment-labels',
  templateUrl: './custom-rename-payment-labels.component.html',
  styleUrls: ['../custom.css']
})
export class CustomRenamePaymentLabelsComponent implements OnInit {

  constructor() { }
  options = {}

  ngOnInit(): void {

    let temp = {
      "options": {
        "hosted_page": {
          "label": {
            "receipt": "Ref No.",
            "description": "Course Name",
            "amount_payable": "Course Fee Payable",
            "amount_paid": "Course Fee Paid",
            "partial_amount_due": "Fee Installment Due",
            "partial_amount_paid": "Fee Installment Paid",
            "expire_by": "Pay Before",
            "expired_on": "Link Expired. Please contact Admin",
            "amount_due": "Course Fee Due"
          },
          "show_preferences": {
            "issued_to": false
          }
        }
      }
    }

    this.options = JSON.stringify(temp, undefined, 4)
  }

}
