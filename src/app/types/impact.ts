export interface Impact {
  bullets: string[];
  icon?:
    | import('src/app/types/icon-name').IconName
    | import('src/app/types/icon-custom-name').IconCustomName;
  subtitle: string;
  title: string;
}
