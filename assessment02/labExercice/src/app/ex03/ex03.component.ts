import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html'
})
export class Ex03Component implements OnInit {

  presidentsX: any[] = [{ name: "Higgins", term: "2011-" },
  { name: "McAleese", term: "1997-2011" },
  { name: "Robinson", term: "1990-1997" },
  { name: "Hillery", term: "1976-1990" },
  { name: "xxxxxxx", term: "1976-1990" },
  { name: "Childers", term: "1973-1974" },
  { name: "Edivagner", term: "infinito" }];


  constructor() { }

  ngOnInit(): void {
  }

}
