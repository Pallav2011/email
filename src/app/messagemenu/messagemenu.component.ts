import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagemenu',
  templateUrl: './messagemenu.component.html',
  styleUrls: ['./messagemenu.component.css']
})
export class MessagemenuComponent implements OnInit {

  visiblity:boolean=false;
  moreName:string="More";
  moreArrow="/assets/down_arrow.png";
  constructor() { }

  ngOnInit() {
  }

  visible(){
    if(this.visiblity==false){
      this.visiblity=true;
      this.moreName="Less";
      this.moreArrow="/assets/up_arrow.png";
  }
  else{
    this.visiblity=false;
    this.moreName="more";
    this.moreArrow="/assets/down_arrow.png";
  }
  }

}
