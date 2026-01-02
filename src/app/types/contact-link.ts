export interface ContactLink {
  detail: string;
  href: string;
  icon:
    | import('src/app/types/icon-name').IconName
    | import('src/app/types/icon-custom-name').IconCustomName;
  label: string;
}
