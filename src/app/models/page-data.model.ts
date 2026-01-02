import { Data } from '@angular/router';

import * as io from 'io-ts';

import { ClassProperties, PageName } from 'src/app/types';

export class PageData implements Data {
  public constructor(props: ClassProperties<PageData>) {
    this.author = props['author'];
    this.description = props['description'];
    this.featureFlag = props['featureFlag'];
    this.keywords = props['keywords'];
    this.title = props['title'];
  }

  public static readonly Codec = io.type(
    {
      author: io.string,
      description: io.string,
      keywords: io.readonlyArray(io.string),
      title: io.string,
    },
    'PageDataApi',
  );

  public readonly author: string;
  public readonly description: string;
  public readonly featureFlag?: string;
  public readonly keywords: readonly string[];
  public readonly title: PageName;

  public static is(value: unknown): value is PageData {
    return PageData.Codec.is(value);
  }
}
