import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer, Header, Navbar } from './layout';

@Component({
  selector: 'cat-root',
  imports: [Footer, Header, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('codytolene');
}
