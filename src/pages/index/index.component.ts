import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.scss'],
  templateUrl: './index.component.html',
})
export class IndexComponent {
  public readonly images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/1920/1280`,
  );
}
