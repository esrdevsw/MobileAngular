import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html'
})
export class Ex02Component implements OnInit {
  presidents: string[] = ["Higgins", "McAleese", "Robinson", "Hillery", "Edivagner"];

  constructor() { }

  ngOnInit(): void {
  }

}
