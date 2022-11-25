import { Component, OnInit } from '@angular/core';
import { EmailService } from "../services/email.service";

@Component({
  selector: 'app-id-email',
  templateUrl: './id-email.component.html'
})
export class IdEmailComponent implements OnInit {

  idEmail: string = "";
  emailAdress: string = "";

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  generateAddress() {
    this.emailAdress = this.emailService.generateAddressService(this.idEmail);
  }
}
