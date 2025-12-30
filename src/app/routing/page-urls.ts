/** All the route URL's for every page. */
export const PAGE_URLS = (
  [
    '', // Home
    '**', // Catch-all
    'privacy-policy',
  ] as const
)
  // Validate URLs.
  .map((route) => {
    // Disallow urls beginning with a slash
    if (route.startsWith('/')) {
      throw new Error(`The URL "${route}" cannot start with a slash.`);
    }
    return route;
  });

export const PUBLIC_SITEMAP_URLS: ReadonlyArray<(typeof PAGE_URLS)[number]> = [
  '',
  'privacy-policy',
];
