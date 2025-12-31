import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ct-logo',
  imports: [RouterLink],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {}
