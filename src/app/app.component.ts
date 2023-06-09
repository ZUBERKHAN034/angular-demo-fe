import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isClickDisabled: boolean = true;
  statusButtonClick: string = 'Button not clicked yet';
  timesButtonClick: number = 0;
  singleWayBindingName: string = 'SingleWay Binding Name';
  twoWayBindingName: string = 'TwoWay Binding Name';
  isUserLogin: boolean = false;
  username: string = '';

  constructor() {
    setTimeout(() => {
      this.isClickDisabled = !this.isClickDisabled;
    }, 100000);
  }

  onButtonClick(): void {
    this.statusButtonClick = `Button clicked ${++this.timesButtonClick} times`;
  }

  handleSingleWayBindingNameInput(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.singleWayBindingName = target.value;
  }

  handleUsername(e: Event): void {
    const target = e.target as HTMLInputElement;

    if (target.value === '') {
      this.isUserLogin = false;
    }

    this.username = target.value;
  }

  onLoginButtonClick(): void {
    this.isUserLogin = true;
  }
}
