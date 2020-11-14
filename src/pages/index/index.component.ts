import { Component, OnInit } from '@angular/core';
import { faIconList, particlesJSParameters } from './index.constants';

// tslint:disable-next-line:no-any
declare let particlesJS: any;

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.scss'],
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  public readonly faIconLists = faIconList;
  public readonly currentJobLengthDisplay = calculateDateSince(
    new Date(2019, 9, 9), // Oct 10, 2019
  );

  public ngOnInit(): void {
    this.loadParticlesJs();
  }

  public loadParticlesJs(): void {
    try {
      particlesJS('particles-js', particlesJSParameters);
    } catch (error) {
      console.warn('Failed to load particles.');
    }
  }
}

function calculateDateSince(pastDate: Date): string {
  const msecDiff = new Date().getTime() - pastDate.getTime();
  const daysDiff = Math.floor(msecDiff / (1000 * 3600 * 24));
  // TODO: Return date since with all values
  return `(${daysDiff} days)`;
}
