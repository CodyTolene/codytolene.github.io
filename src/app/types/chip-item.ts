export interface ChipItem {
  label: string;
  icon:
    | import('src/app/types/icon-name').IconName
    | import('src/app/types/icon-custom-name').IconCustomName;
}
