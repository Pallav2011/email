import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {

  constructor() { }

  selectOptions:string[]=['All','None','Read','Unread','Starred','Unstarred'];
  ngOnInit() {
  }

}
