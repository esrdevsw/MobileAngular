import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountyComponent } from './county/county.component';
import { DirectivesComponent } from './directives/directives.component';
import { NameEmailComponent } from './emailService/name-email/name-email.component';
import { IdEmailComponent } from './emailService/id-email/id-email.component';

@NgModule({
  declarations: [
    AppComponent,
    CountyComponent,
    DirectivesComponent,
    NameEmailComponent,
    IdEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
