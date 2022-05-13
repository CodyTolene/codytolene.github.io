import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DEFAULT_PAGE_META } from 'src/core/constants';

@Injectable()
export class MetaService {
  public constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {}

  public getPageTitle(): string {
    return this.title.getTitle();
  }

  public setPageTitle(title: string, trailingTitle?: string): void {
    this.title.setTitle(
      trailingTitle
        ? `${title || DEFAULT_PAGE_META.title} - ${
            trailingTitle || DEFAULT_PAGE_META.trailingTitle
          }`
        : title || DEFAULT_PAGE_META.title
    );
  }

  public setPageDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  public setPageAuthor(author: string): void {
    this.meta.updateTag({ name: 'author', content: author });
  }

  public setPageKeywords(keywords: readonly string[]): void {
    this.meta.updateTag({ name: 'keywords', content: keywords.toString() });
  }
}
