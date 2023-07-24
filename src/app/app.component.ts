import { Component, OnInit } from '@angular/core';
import { VisibilityService } from './visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'email';
  displayMessageMenu:boolean;
  constructor(private myserv : VisibilityService){

  }

  ngOnInit(): void  {
    this.myserv.DataVisible.subscribe(res=>{
      if(res == true){
        document.getElementById("msg").style.width = "17%";
        document.getElementById("msglist").style.width = "80%";
        document.getElementById("msglist").style.left = "0px";

      }
      else{
        document.getElementById("msg").style.width = "5%";
        document.getElementById("msglist").style.width = "92%";
        // document.getElementById("msglist").style.position = "relative"
        document.getElementById("msglist").style.left = "-180px";
        
      }
    })
  }

  
}
