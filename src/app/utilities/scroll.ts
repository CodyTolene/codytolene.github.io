/** Smoothly scroll to an element. */
export function scrollIntoView(element: HTMLElement): void {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}

/** Smoothly scroll to the top of the page. */
export function scrollTop(): void {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: 0,
  });
}
