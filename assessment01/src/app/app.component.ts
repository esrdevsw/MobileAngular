import { Component } from '@angular/core';

@Component({
  selector: 'app-rootX',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'my-dream-app';

  name2: string = "Unknown";

  buttonDisable: boolean;
  date: Date;
  counter: number = 0;

  onSave() {
    alert("You pressed save");
  }

  countClick() {
    this.counter++;
  }

  namesList: string[] = ["aa", "bb", "cc"];



  constructor() {
    this.date = new Date();
    if (this.date.getDay() == 6 || this.date.getDay() == 7) {
      this.buttonDisable = true;
    } else {
      this.buttonDisable = false;
    }

    this.namesList.push("DDdd");
  }
}
