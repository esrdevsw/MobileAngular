import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html'
})
export class Ex01Component implements OnInit {

  nClick: number = 0;
  hidden: boolean = false;
  clickCount() {
    this.nClick++;
  }

  constructor() { }

  ngOnInit(): void {
  }

  starDbClick() {
    this.hidden = !this.hidden;
    // if (this.hidden == true) {
    //   this.hidden = false;
    // } else {
    //   this.hidden = true;
    // }
  }

}
