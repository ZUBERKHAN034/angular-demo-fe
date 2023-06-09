import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failure-message',
  templateUrl: './failure-message.component.html',
  styleUrls: ['./failure-message.component.css'],
})
export class FailureMessageComponent implements OnInit {
  failureMessage: string = 'Failure in application';

  constructor() {}

  ngOnInit(): void {}
}
