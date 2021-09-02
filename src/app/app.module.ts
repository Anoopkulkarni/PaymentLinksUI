import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentLinksComponent } from './payment-links/payment-links.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomBusinessNameComponent } from './custom/custom-business-name/custom-business-name.component';
import { CustomPaymentMethodsComponent } from './custom/custom-payment-methods/custom-payment-methods.component';
import { CustomReadOnlyFieldsComponent } from './custom/custom-read-only-fields/custom-read-only-fields.component';
import { CustomRenamePaymentLabelsComponent } from './custom/custom-rename-payment-labels/custom-rename-payment-labels.component';
import { CustomRenameCheckoutLabelsComponent } from './custom/custom-rename-checkout-labels/custom-rename-checkout-labels.component';
import { FaqsComponent } from './faqs/faqs.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentLinksComponent,
    CustomBusinessNameComponent,
    CustomPaymentMethodsComponent,
    CustomReadOnlyFieldsComponent,
    CustomRenamePaymentLabelsComponent,
    CustomRenameCheckoutLabelsComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
