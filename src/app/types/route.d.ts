type PageRoute = import('@angular/router').Route & {
  data: import('@angular/router').Data & {
    meta: {
      author: string;
      description: string;
      keywords: string[];
      title: PageName;
    };
  };
};
