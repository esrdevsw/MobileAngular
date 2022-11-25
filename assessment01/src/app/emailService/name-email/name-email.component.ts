import { Component, OnInit } from '@angular/core';
import { EmailService } from "../services/email.service";

@Component({
  selector: 'app-name-email',
  templateUrl: './name-email.component.html'
})
export class NameEmailComponent implements OnInit {
  nameEmail: string = "";
  emailAdress: string = "";

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  generateAddress() {
    this.emailAdress = this.emailService.generateAddressService(this.nameEmail);
  }

}
