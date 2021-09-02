import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }

  faqs:string[][] =[]
  activated = undefined

  ngOnInit(): void {

    let a = ""
    let b = ""

    a = "Invalid access: Please refer the API migration document https://razorpay.com/docs/payment-links/api/ to switch to the new contract"
    b = "New payment link feature needs to be enabled on the Merchant ID.Feature name: paymnetlinks_v2"

    this.faqs.push([a,b])


    a = "amount: cannot be blank; first_min_partial_amount: 100 must be less than or equal to 0."
    b = "Amount parameter needs to be passed in the API request when partial parameter is passed"

    this.faqs.push([a,b])

    a = "amount: cannot be blank."
    b = "Amount parameter needs to be passed in the API request"

    this.faqs.push([a,b])

    a = "invalid input [strippedId] = [HnnrYJ6INnxb]"
    b = "plink_id in the needs to be passed in the API endpoint to fetch the payment links"

    this.faqs.push([a,b])

    a = "UPI Payment Links is not supported in Test Mode. Please experience the product in Live Mode."
    b = "UPI works only on the Live mode"

    this.faqs.push([a,b])

    a = "update can only be made in created or partially paid state"
    b = "You can update the payment link which is either in created or partially paid state"

    this.faqs.push([a,b])

    a = "cannot cancel or expire a cancelled link"
    b = "You cannot cancel the payment link which is already paid or in the expired state"

    this.faqs.push([a,b])



  }

  activate(i:any){
    if(this.activated == i){
      this.activated = undefined
    }
    else{

      this.activated = i
    }
  }

}
