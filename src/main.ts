import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '../app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));


import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
