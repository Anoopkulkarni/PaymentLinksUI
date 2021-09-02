import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  public activeProject:ReplaySubject<any> = new ReplaySubject(1);

  url:string = "https://paymentlinks.herokuapp.com/"

  constructor(private http:HttpClient) { }

  // createPaymentLink(obj: any) {
  //   console.log(obj);

  //   return this.http.post("http://localhost:3000/createPaymentLink/",obj);
  // }

  // fetchPaymentLink(id:string){
  //   return this.http.get("http://localhost:3000/fetchPaymentLink/"+id);
  //   // return this.http.get("http://localhost:3000/fetchPaymentLinks/plink_HmCucQlsEA4Neo");
  // }

  // fetchPaymentLinks(){
  //   return this.http.get("http://localhost:3000/fetchPaymentLinks");
  // }

  // updatePaymentLink(id:string,body:any){
  //   console.log(body);

  //   return this.http.post("http://localhost:3000/updatePaymentLink/"+id, body);
  // }

  // cancelPaymentLink(id:string){
  // return this.http.post("http://localhost:3000/cancelPaymentLink/"+id, {} );
  // }

  getCreateJson(){
    return this.http.get("/assets/json/create.json")
  }

  getJson(json_name:string):Observable<any>{
    // if(payment_type=="fetch"){
      return this.http.get("/assets/json/"+ json_name +".json")
    // }
    // if(payment_type=="create"){
    //   return this.http.get("/assets/json/create.json")
    // }
    // if(payment_type=="update"){
    //   return this.http.get("/assets/json/update.json")
    // }
    // if(payment_type=="cancel"){
    //   return this.http.get("/assets/json/cancel.json")
    // }
    // this.activeProject.error("JSON not found")
    // return this.activeProject
  }


  requestPaymentLink(obj:any){
    return this.http.post(this.url+"requestPaymentLink/", obj );
  }
}
