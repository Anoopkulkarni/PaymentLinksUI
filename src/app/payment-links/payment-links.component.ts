import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment-links',
  templateUrl: './payment-links.component.html',
  styleUrls: ['./payment-links.component.css']
})
export class PaymentLinksComponent implements OnInit, AfterViewInit {

  @Input() payment_type = "";
  @Input() create_custom_flag:boolean = false;
  @Input() custom_option = "";
  editor_type = "form";

  message=""

  username = ""
  password = ""

  payment_links : any[];
  fetch_data = {}
  // input_text:string = ""

  create_json = {}

  input_control :FormControl;
  output_control:FormControl;

  response_json:any[] = []

  link_control :FormControl;
  link:string = ""
  api_type_control :string;

  pl_option:string="standard pl"
  auth_type:string = "default"

  color = "#6c9fff"
  bg_light = "#6c9fff1a"
  border = "#6c9fff99"

  endpoint_edit = false;
  endpoint_edit_info = "This link is editable.";
  json_body_edit = false;
  id_editpoint_position = 0;

  error_color = "#f72e2e";
  data_color = "#a2fca2";
  response_color = "#a2fca2"

  auth_error = false


  constructor(private dataService:DataService) {
    this.payment_links = []
    this.input_control = new FormControl();
    this.output_control = new FormControl();
    this.link_control = new FormControl();
    this.api_type_control = "";
   }

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {
  }

  ngOnChanges(){
    this.getFiletoLoad()
    // this.input_control.setValue("<a href='http://example.com'>Example</a>")
    // console.log("ngOnChanges : ",this.payment_type);
  }

  changeEditorType(type:string){
    this.editor_type = type;
  }

  changeAuth(auth:string){
      this.auth_type = auth
  }

  getFiletoLoad(){
    this.output_control.setValue("")
    let file_name = ""

    if(this.create_custom_flag == true){
      file_name = this.custom_option
    }
    else{
      file_name = this.payment_type
    }

    this.loadJson(file_name)
  }

  loadJson(filename:string){
    // console.log("calling...");

    this.dataService.getJson(filename).subscribe(
      data=>{
        // this.payment_links = data
        try{
          if(data ){
            this.loadData(Object(data))
          }
        }catch(e){
          throw new Error("JSON not found");

        }
      },
      error=>{
        console.error("err ")
        console.error(error)
      }
    )
  }

  set_pl_option(option:string){
    let isUPI = false

    if(this.pl_option == "upi pl"){
      isUPI = true;
    }
    this.pl_option = option
    let json_value = JSON.parse(this.input_control.value)

    if(this.pl_option == "standard pl"){
      this.getFiletoLoad()
    }
    this.checkUPIPL(json_value,isUPI)
  }

  checkUPIPL(json_value:any, isUPI:boolean){


    if(this.pl_option == "upi pl" && this.payment_type == "create"){
      json_value["upi_link"] = "true"
      this.input_control.setValue(JSON.stringify(json_value, undefined, 4))

      if(isUPI == false){
        this.scrollToBottom()
      }
    }

  }

  requestPaymentLink(){
    this.auth_error = false


    let body:any = {}
    if(this.auth_type == "using credentials"){
      body = {"username" : this.username, "password" : this.password}

      if(this.username == "" || this.password==""){
        this.auth_error = true
      }
    }
    var obj = JSON.parse(this.input_control.value)
    body["body"]  = obj
    body["url"] = this.link_control.value
    body["method"] = this.api_type_control.toUpperCase()



    console.log(body);


    this.dataService.requestPaymentLink(body).subscribe(
      data=>{
        // this.payment_links = data
        try{
          if(data ){
            this.setOutput(data)
          }

        }catch(e){
        }
      },
      error=>{
        console.log("err ")
        console.log(error)
        this.setError(error)
      }
    )


  }



    setOutput(obj:any){
      console.log(obj);

      if(obj.error != undefined){
        let obj_err:any = {}
        if(obj.error.error!=undefined){
          obj_err = {"error": obj.error.error}

        }
        else if(obj.error!=undefined){
          obj_err = {"error": obj.error}

        }
        else{
          obj_err = {"error": obj}
        }
        if(obj_err.error.description){
          if(obj_err.error.description == "The api key provided is invalid"){
            this.auth_error = true
          }
        }

        console.log(obj_err);

        this.response_json = [obj_err]
        this.output_control.setValue(JSON.stringify(obj_err, undefined, 4))
        this.response_color = this.error_color
      }else{

        this.response_json = obj["payment_links"]
        this.output_control.setValue(JSON.stringify(obj, undefined, 4))
        this.response_color = this.data_color
      }

    }
    setError(obj:any){
        let obj_err:any = {}

        if(obj.error != undefined){

          if(obj.error.error!=undefined){
            obj_err = {"error": obj.error.error}

          }
          else if(obj.error!=undefined){
            obj_err = {"error": obj.error}

          }
          else{
            obj_err = {"error": obj}
          }

          console.log(obj_err);

          this.response_json = [obj_err]
          this.output_control.setValue(JSON.stringify(obj_err, undefined, 4))
          this.response_color = this.error_color
        }else{
          obj_err = {"error" : obj}
        }

        if(obj_err.error.description){
          if(obj_err.error.description == "The api key provided is invalid"){
            this.auth_error = true
          }
        }

        this.response_json = [obj_err]
        this.output_control.setValue(JSON.stringify(obj_err, undefined, 4))
        this.response_color = this.error_color


    }

    private scrollToBottom(): void {
      var scrollContainer = document.getElementById("input_area")
      if(scrollContainer!=undefined){
        scrollContainer.scroll({
          top: scrollContainer.scrollHeight,
          left: 0,
          behavior: 'smooth'
        });
      }

    }

    loadData(obj:Object){
      this.create_json = Object(obj)[0]

      this.input_control.setValue(JSON.stringify(this.create_json, undefined, 4))

      let json_value = JSON.parse(this.input_control.value)
      if(this.pl_option == "upi pl"){
        this.checkUPIPL(json_value,true)
      }else{
        this.checkUPIPL(json_value,false)
      }

      let metadata = Object(obj)[1]
      this.link_control.setValue(metadata["endpoint"])
      this.link = metadata["endpoint"]
      this.api_type_control = metadata["type"]



      this.endpoint_edit = metadata["endpoint_edit"]
      this.endpoint_edit_info = metadata["endpoint_edit_info"]
      this.json_body_edit = metadata["json_body_edit"]
      this.id_editpoint_position = metadata["id_editpoint_position"]

      this.dataService.getJson(this.api_type_control.toLowerCase()).subscribe(

        data=>{
          // this.payment_links = data
          try{
            if(data ){

              let requestData = Object(data)[0]

              this.color = requestData["color"]
              this.bg_light = requestData["bg_light"]
              this.border = requestData["border"]

            }
          }catch(e){
            throw new Error("JSON not found");

          }
        },
        error=>{
          console.error("err ")
          console.error(error)
        }
      )


    }




}
