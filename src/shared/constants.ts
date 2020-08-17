export interface PageMeta {
  author: string;
  description: string;
  keywords: string[];
  title: string;
  trailingTitle: string;
}

export const defaultPageMeta: PageMeta = {
  author: 'Cody Tolene',
  description: "Cody Tolene's Portfolio Website",
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
