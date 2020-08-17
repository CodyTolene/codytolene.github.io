import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

declare let gtag;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
interface GTagEvent {
  page_location: string | null;
  page_path: string | null;
  page_title: string | null;
  send_page_view: boolean | null;
}

// TODO: Add open graph protocol meta data
// https://ogp.me/

@Injectable()
export class SEOService {
  public constructor(
    private readonly title: Title,
    private readonly meta: Meta,
  ) {}

  /* DYNAMIC PAGE META */

  public updateTitle(
    title: string,
    {
      trailingTitle,
    }: {
      trailingTitle?: string;
    } = {},
  ): void {
    this.title.setTitle(trailingTitle ? `${title} - ${trailingTitle}` : title);
  }

  public updateMetaDescription(desccription: string): void {
    this.meta.updateTag({ name: 'description', content: desccription });
  }

  public updateMetaKeywords(keywords: string[]): void {
    this.meta.updateTag({ name: 'keywords', content: keywords.toString() });
  }

  /* GOOGLE ANALYTICS / TAG MANAGER */

  public sendGoogleAnalyticsPageView(url: string, path: string): void {
    if (environment.production) {
      try {
        const gtagEvent: GTagEvent = {
          page_location: url,
          page_path: path,
          page_title: null,
          send_page_view: true,
        };
        gtag('js', new Date());
        gtag('config', 'UA-42346076-7', gtagEvent);
      } catch (error) {
        console.warn('Error communicating with Google Analytics', error);
      }
    }
  }
}
