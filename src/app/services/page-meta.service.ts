import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { APP_DOMAIN, APP_TITLE, META_DESCRIPTION } from 'src/app/constants';

/** Service for managing application page meta for SEO optimization. */
@Injectable({ providedIn: 'root' })
export class PageMetaService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly siteUrl = `https://${APP_DOMAIN}`;

  public setAuthor(author: string): void {
    this.update({ name: 'author', content: author });
  }

  public setDescription(description: string): void {
    this.update({ name: 'description', content: description });
    this.update({ property: 'og:description', content: description });
    this.update({ name: 'twitter:description', content: description });
  }

  public setKeywords(keywords: readonly string[]): void {
    this.update({ name: 'keywords', content: keywords.join(', ') });
  }

  public setTitle(pageTitle: string): void {
    const fullTitle = `${pageTitle} - ${APP_TITLE}`;
    this.title.setTitle(fullTitle);

    this.update({ property: 'og:title', content: fullTitle });
    this.update({ name: 'twitter:title', content: fullTitle });
  }

  /**
   * Sets the canonical URL for the current page.
   * Pass a path like "/projects" to ensure prerendered pages get a stable canonical.
   */
  public setCanonicalUrl(pathOrUrl?: string): void {
    const canonicalUrl = this.toAbsoluteUrl(pathOrUrl) || this.getCurrentUrl();

    let canonicalLink = this.document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', canonicalUrl);
    this.update({ property: 'og:url', content: canonicalUrl });
  }

  /**
   * Sets the Open Graph image for social sharing.
   */
  public setImage(imageUrl: string, altText = `${APP_TITLE}`): void {
    const absoluteImageUrl = this.toAbsoluteUrl(imageUrl) || imageUrl;

    this.update({ property: 'og:image', content: absoluteImageUrl });
    this.update({ property: 'og:image:secure_url', content: absoluteImageUrl });
    this.update({ property: 'og:image:alt', content: altText });

    this.update({ name: 'twitter:image', content: absoluteImageUrl });
    this.update({ name: 'twitter:image:alt', content: altText });
  }

  /**
   * Sets the Open Graph type (article, website, etc.).
   */
  public setType(type: 'website' | 'article' = 'website'): void {
    this.update({ property: 'og:type', content: type });
  }

  /**
   * Apply baseline SEO tags that should exist on every page.
   * Call this once near app startup (and then override per-page tags as needed).
   */
  public setDefaultTags(): void {
    for (const tag of this.getDefaultTags()) {
      this.update(tag);
    }

    // Ensure canonical exists even if a page forgets to set it explicitly.
    this.setCanonicalUrl();
  }

  private update(tag: MetaDefinition): void {
    const selector = this.buildSelector(tag);

    if (selector) {
      this.meta.updateTag(tag, selector);
      return;
    }

    // Fallback for cases where Angular cannot build a selector.
    // Most tags should hit the selector path above.
    this.meta.addTag(tag, false);
  }

  private buildSelector(tag: MetaDefinition): string | null {
    if (tag.name) {
      return `name="${tag.name}"`;
    }

    if ((tag as { property?: string }).property) {
      const property = (tag as { property: string }).property;
      return `property="${property}"`;
    }

    // We intentionally do not manage charset or viewport here.
    return null;
  }

  private getCurrentUrl(): string {
    const location = this.document?.location;
    const href = location?.href;

    if (!href) {
      return this.siteUrl;
    }

    // Canonical should not include query params or hash.
    const url = new URL(href);
    return `${url.origin}${url.pathname}`;
  }

  private toAbsoluteUrl(pathOrUrl?: string): string | null {
    if (!pathOrUrl) {
      return null;
    }

    // If already absolute, normalize and strip query/hash for canonical use.
    if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
      const url = new URL(pathOrUrl);
      return `${url.origin}${url.pathname}`;
    }

    // Treat as path.
    const normalizedPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
    return `${this.siteUrl}${normalizedPath}`;
  }

  private getDefaultTags(): MetaDefinition[] {
    const defaultTitle = this.title.getTitle() || APP_TITLE;
    const defaultCanonical = this.getCurrentUrl();
    const defaultImage = `${this.siteUrl}/images/cody.png`;

    return [
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: META_DESCRIPTION },
      { name: 'theme-color', content: '#252934' },

      // Open Graph defaults
      { property: 'og:title', content: defaultTitle },
      { property: 'og:description', content: META_DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: defaultCanonical },
      { property: 'og:site_name', content: APP_TITLE },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: defaultImage },
      { property: 'og:image:secure_url', content: defaultImage },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${APP_TITLE}` },

      // Twitter Card defaults
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: defaultTitle },
      { name: 'twitter:description', content: META_DESCRIPTION },
      { name: 'twitter:image', content: defaultImage },
      { name: 'twitter:image:alt', content: `${APP_TITLE}` },

      // Bot hints
      {
        name: 'googlebot',
        content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
      },
      { name: 'bingbot', content: 'index, follow' },
    ];
  }
}
