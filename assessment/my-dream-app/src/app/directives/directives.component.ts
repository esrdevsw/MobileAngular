import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'root-directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent implements OnInit {

  name: String = "Edivagner";
  age: number = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
