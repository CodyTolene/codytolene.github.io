import { Component } from '@angular/core';
import { ScreenSizeService } from 'src/core/services/screen-size.service';

@Component({
  selector: 'ct-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public constructor(private readonly screenSizeService: ScreenSizeService) {}

  public readonly isMobileChanges = this.screenSizeService.isMobileChanges;
}
