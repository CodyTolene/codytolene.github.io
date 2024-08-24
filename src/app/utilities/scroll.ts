/** Smoothly scroll an element into view. */
export function scrollToElement(element: HTMLElement): void {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}

/** Smoothly scroll to an element by ID. */
export function scrollToElementById(id: string): void {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Failed to find and scroll to element with id "${id}".`);
    return;
  }
  scrollToElement(element);
}

/** Smoothly scroll to the top of the page. */
export function scrollTop(): void {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: 0,
  });
}
