import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';

  content = "payment links"

  payment_type:string = "create";
  // slider_margin_left = "105%"
  slider_open_anim = "slide-left 0.5s forwards"
  slider_close_anim = "slide-right 0.5s forwards"

  menu_slider_open_anim = "slide-right2 0.5s forwards"
  menu_slider_close_anim = "slide-left2 0.5s forwards"


  create_custom_flag = false

  custom_option = "";
  custom_show = false;
  side_bar = false;
  slider_anim = ""
  menu_slider_anim = ""


  // custom_option = "CustomBusinessName";
  // custom_show = true;
  // side_bar = true;
  // slider_anim = "slider_open_anim"

  changeType(type:string){
    this.content = "payment links"
    this.payment_type = type;

    if(this.payment_type != "create"){
      this.create_custom_flag = false
      this.custom_show = false;
      this.custom_option = "";
      if(this.slider_anim!=""){
        this.closeSlider()
      }
    }

  }

  changeContent(c:string){
    this.content = c
    this.payment_type = "";
    this.closeSlider()
  }

  closeNav(){
    this.side_bar = false
    this.menu_slider_anim = this.menu_slider_close_anim
  }

  openNav(){
    this.side_bar = true
    this.menu_slider_anim = this.menu_slider_open_anim
  }

  changeCustom(value:string){
    this.custom_option = value
    this.payment_type = "create";
    this.create_custom_flag = true
    this.content = "payment links"
    this.slider_anim = this.slider_open_anim
    // this.slider_margin_left = "70%"
  }

  toggleCustom(){
    this.custom_show = !this.custom_show;
  }

  closeRightSlider(){

    this.slider_anim = this.slider_close_anim
  }

  closeSlider(){

    this.closeRightSlider()
    this.custom_option = "";
    this.create_custom_flag = false
    // this.slider_margin_left = "105%"
  }

}
