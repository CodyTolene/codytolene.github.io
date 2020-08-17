export interface PageMeta {
  author: string;
  description: string;
  googleAnalyticsId: string;
  keywords: string[];
  title: string;
  trailingTitle: string;
}

const defaultPageMeta: PageMeta = {
  author: 'Cody Tolene',
  description: "Cody Tolene's Portfolio Website",
  googleAnalyticsId: 'UA-42346076-7',
  keywords: [
    'Cody',
    'Tolene',
    'Portfolio',
    'Resume',
    'Personal',
    'Website',
    'About',
  ],
  title: 'Portfolio',
  trailingTitle: 'Cody Tolene',
};

export const DefaultPageMeta: PageMeta = defaultPageMeta;
