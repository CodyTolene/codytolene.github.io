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
    this.meta.updateTag({ name: 'author', content: author });
  }

  public setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
    // Also update Open Graph and Twitter Card descriptions
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  public setKeywords(keywords: readonly string[]): void {
    this.meta.updateTag({ name: 'keywords', content: keywords.join(', ') });
  }

  public setTitle(title: string): void {
    const fullTitle = `${title} - ${APP_TITLE}`;
    this.title.setTitle(fullTitle);
    // Also update Open Graph and Twitter Card titles
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
  }

  /**
   * Sets the canonical URL for the current page.
   * This helps prevent duplicate content issues.
   */
  public setCanonicalUrl(url?: string): void {
    const canonicalUrl = url || this.getCurrentUrl();

    // Update or create canonical link
    let canonicalLink = this.document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Also update Open Graph URL
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
  }

  /**
   * Sets the Open Graph image for social sharing.
   */
  public setImage(imageUrl: string): void {
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }

  /**
   * Sets the Open Graph type (article, website, etc.).
   */
  public setType(type: 'website' | 'article' = 'website'): void {
    this.meta.updateTag({ property: 'og:type', content: type });
  }

  /**
   * Sets article-specific metadata for news articles.
   */
  public setArticleMeta(options: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  }): void {
    this.setType('article');

    if (options.publishedTime) {
      this.meta.updateTag({
        property: 'article:published_time',
        content: options.publishedTime,
      });
    }
    if (options.modifiedTime) {
      this.meta.updateTag({
        property: 'article:modified_time',
        content: options.modifiedTime,
      });
    }
    if (options.author) {
      this.meta.updateTag({
        property: 'article:author',
        content: options.author,
      });
    }
    if (options.section) {
      this.meta.updateTag({
        property: 'article:section',
        content: options.section,
      });
    }
    if (options.tags && options.tags.length > 0) {
      // Remove existing article:tag entries to prevent accumulation
      this.removeArticleTags();
      options.tags.forEach((tag) => {
        this.meta.addTag({ property: 'article:tag', content: tag });
      });
    }
  }

  /**
   * Removes all article:tag meta elements to prevent accumulation between articles.
   */
  private removeArticleTags(): void {
    const existingTags = this.document.querySelectorAll('meta[property="article:tag"]');
    existingTags.forEach((tag) => tag.remove());
  }

  public setDefaultTags(): void {
    const tags = this.getDefaultTags();
    const existingTags = tags.filter((tag) => {
      const findBy = tag.name ? `name="${tag.name}"` : `property="${tag.property}"`;

      const existingTag = this.meta.getTag(findBy);
      return existingTag && existingTag.content === tag.content;
    });

    if (existingTags.length > 0) {
      existingTags.forEach((tag) => {
        const findBy = tag.name ? `name="${tag.name}"` : `property="${tag.property}"`;
        this.meta.removeTag(findBy);
      });
    }

    this.meta.addTags(tags);

    // Set initial canonical URL
    this.setCanonicalUrl();
  }

  private getCurrentUrl(): string {
    if (typeof window !== 'undefined') {
      // Get clean URL without query params for canonical
      const url = new URL(window.location.href);
      return `${url.origin}${url.pathname}`;
    }
    return this.siteUrl;
  }

  private getDefaultTags(): MetaDefinition[] {
    return [
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: new Date().toISOString().split('T')[0] },
      { charset: 'UTF-8' },
      { name: 'theme-color', content: '#252934' },
      // Open Graph defaults
      { property: 'og:title', content: this.title.getTitle() },
      { property: 'og:description', content: META_DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: this.getCurrentUrl() },
      { property: 'og:site_name', content: APP_TITLE },
      { property: 'og:locale', content: 'en_US' },
      {
        property: 'og:image',
        content: `${this.siteUrl}/images/logo/beacon_transparent.png`,
      },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      // Twitter Card defaults
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: this.title.getTitle() },
      { name: 'twitter:description', content: META_DESCRIPTION },
      {
        name: 'twitter:image',
        content: `${this.siteUrl}/images/logo/beacon_transparent.png`,
      },
      // Google AdSense
      { name: 'google-adsense-account', content: 'ca-pub-4966893083726404' },
      // Additional SEO hints
      {
        name: 'googlebot',
        content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
      },
      { name: 'bingbot', content: 'index, follow' },
    ];
  }
}
