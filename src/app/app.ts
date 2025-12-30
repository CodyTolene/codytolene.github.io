import { Component, OnInit, inject } from '@angular/core';
import { Analytics } from '@angular/fire/analytics';
import { RouterOutlet } from '@angular/router';

import { distinctUntilChanged, filter } from 'rxjs';

import { Footer, Header, Navbar } from './layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AppUpdateService, PageDataService, PageMetaService } from 'src/app/services';
import { isNonEmptyValue, shareSingleReplay } from 'src/app/utilities';
import { environment } from 'src/environments/environment';

@UntilDestroy()
@Component({
  selector: 'cat-root',
  imports: [Footer, Header, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [AppUpdateService, PageDataService, PageMetaService],
})
export class App implements OnInit {
  private readonly appUpdateService = inject(AppUpdateService);
  private readonly pageDataService = inject(PageDataService);
  private readonly pageMetaService = inject(PageMetaService);

  protected readonly analytics = environment.isProduction ? inject(Analytics) : null;

  private readonly pageDataChanges = this.pageDataService.pageDataChanges.pipe(
    filter(isNonEmptyValue),
    distinctUntilChanged(),
    shareSingleReplay(),
  );

  public ngOnInit(): void {
    this.appUpdateService.init();

    this.pageMetaService.setDefaultTags();

    this.pageDataChanges.pipe(untilDestroyed(this)).subscribe((pageData) => {
      this.pageMetaService.setCanonicalUrl();
      this.pageMetaService.setAuthor(pageData.author);
      this.pageMetaService.setDescription(pageData.description);
      this.pageMetaService.setKeywords(pageData.keywords);
      this.pageMetaService.setTitle(pageData.title);
    });
  }
}
