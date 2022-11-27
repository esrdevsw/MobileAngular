import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs01',
  templateUrl: './obs01.component.html'
})
export class Obs01Component implements OnInit {
  title01 = '';
  h: { name: string, hobby: string }[] = [];
  updated = '';

  constructor(private hc: HttpClient) { }

  getRemoteData(): Observable<any> {
    return this.hc.get("https://jsonblob.com/api/1040583148911738880");
  }
  ngOnInit(): void {
    this.getRemoteData().subscribe(data => {
      this.title01 = data.category;
      this.updated = data.updatedBy;
      this.h = data.hobbies;
      console.log(data);
    });
  }
}
