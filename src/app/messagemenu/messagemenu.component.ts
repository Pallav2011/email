import { Component, OnInit } from '@angular/core';
import { VisibilityService } from '../visibility.service';

@Component({
  selector: 'app-messagemenu',
  templateUrl: './messagemenu.component.html',
  styleUrls: ['./messagemenu.component.css']
})
export class MessagemenuComponent implements OnInit {

  visiblity:boolean=false;
  moreName:string="More";
  moreArrow="/assets/down_arrow.png";
  visibleCategory:boolean = false;
  narrowVisible:boolean;
  wideVisible:boolean;

  constructor( private myServ : VisibilityService) { }

  ngOnInit() {
    this.myServ.DataVisible.subscribe(res=>{
      if(res){       
        this.wideVisible = true;
        this.narrowVisible = false;
      }
      else{
        this.narrowVisible = true;
        this.wideVisible = false;
      }
    })
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

  visibleCat(){
    if(this.visibleCategory==false){
      this.visibleCategory=true;
  }
  else{
    this.visibleCategory=false;
  }
  }

}
