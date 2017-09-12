import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  links: any =  [
    { url: 'clients', text: 'Clients', sub: [
      { url: '', text: 'List' },
      { url: 'new', text: 'New'}
    ] },
    { url: 'drivers', text: 'Drivers', sub: [
      { url: '', text: 'List' },
      { url: 'new', text: 'New'}
    ] },
    { url: 'products', text: 'Products', sub: [
      { url: '', text: 'List' },
      { url: 'new', text: 'New'}
    ] }
  ];

  constructor() {
  }
}
