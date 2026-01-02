export interface Project {
  description: string;
  imageUrl: string;
  links: Array<{ label: string; href: string }>;
  role: string;
  stack: Array<import('src/app/types/chip-item').ChipItem>;
  title: string;
}
