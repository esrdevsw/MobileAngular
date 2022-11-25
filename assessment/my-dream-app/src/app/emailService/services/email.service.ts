import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  generateAddressService(id: string): string {
    return id + "@atu.ie"
  }
}
