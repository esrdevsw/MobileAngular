import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html'
})
export class CountyComponent implements OnInit {

  g = "Galway";
  lm = "Leitrim";
  mo = "Mayo";
  so = "Sligo";

  constructor() { }

  ngOnInit(): void {
  }

}
