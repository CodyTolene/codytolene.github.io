import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/core/services/screen-size.service';

@Component({
  selector: 'ct-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers: [ScreenSizeService],
})
export class HeaderComponent implements OnInit {
  public constructor(private readonly screenSizeService: ScreenSizeService) {}

  public ngOnInit(): void {
    console.log('Running');
    this.screenSizeService.isMobileChanges.subscribe((isMobile) => {
      console.log(isMobile);
    });
  }
}
