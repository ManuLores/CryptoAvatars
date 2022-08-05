import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {

  @Output() selectMenu = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
