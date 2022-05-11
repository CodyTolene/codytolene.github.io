import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const enableDebugging = false;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
interface PageViewEvent {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  page_location: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  page_path: string | null;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  page_title: string | null;
}

@Injectable()
export class GoogleAnalyticsService {
  /** Send a page view event. */
  public trackPageView({
    pagePath = window.location.pathname,
    pageTitle = document.title,
    pageLocation = window.location.href,
  }: {
    pagePath?: string;
    pageTitle?: string;
    pageLocation?: string;
  } = {}): void {
    const viewMeta: PageViewEvent = {
      page_title: pageTitle,
      page_path: pagePath,
      page_location: pageLocation,
    };

    if (environment.production) {
      try {
        gtag('event', 'page_view', viewMeta);
      } catch (error: unknown) {
        console.warn(error);
      }
    } else if (enableDebugging) {
      // eslint-disable-next-line no-console
      console.info('event', 'page_view', viewMeta);
    }
  }
}

// Google Analytics global definitions
declare global {
  function gtag(...args: unknown[]): void;
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: any;
  }
}
