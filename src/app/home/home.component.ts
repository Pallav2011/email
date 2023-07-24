import { Component, OnInit } from '@angular/core';
import { VisibilityService } from '../visibility.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buttunClicked:boolean=false;
  // buttonNotclicked:boolean = false;
  constructor(private myServ : VisibilityService) { }

  ngOnInit() {

  }

  clicked(){
    if(this.buttunClicked == true){
      this.myServ.DataVisible.next(this.buttunClicked);
      this.buttunClicked = false;
    }
    else{
      this.myServ.DataVisible.next(this.buttunClicked);
      this.buttunClicked = true;

    }
  }
}
