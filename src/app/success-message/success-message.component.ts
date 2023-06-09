import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css'],
})
export class SuccessMessageComponent implements OnInit {
  successMessage: string = 'All good in application';
  successPercentage: number = 0;

  constructor() {
    setInterval(() => {
      this.successPercentage < 100 &&
        (this.successPercentage = this.successPercentage + 1);
    }, 1000);
  }

  ngOnInit(): void {}

  // This is how create a success message function or method
  getSuccessPercentage(): string {
    return `${this.successPercentage}%`;
  }
}
