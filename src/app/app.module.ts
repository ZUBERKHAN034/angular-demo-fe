import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FailureMessageComponent } from './failure-message/failure-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

@NgModule({
  declarations: [
    AppComponent,
    FailureMessageComponent,
    SuccessMessageComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
