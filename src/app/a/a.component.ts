import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  flag: string = " בירור";

  constructor() { }

  ngOnInit(): void {
  }
  refresh() {
    this.flag = "חריגה";
  }
}
