type IconName =
  | (typeof import('src/app/components/icon/icons').icons)[number]
  | (typeof import('src/app/components/icon/icons-custom').iconsCustom)[number];
