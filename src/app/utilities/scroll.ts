/** Smoothly scroll an element into view. */
export function scrollToElement(element: HTMLElement, offset = 60): void {
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Smoothly scroll to an element by ID.
 *
 * @param id The ID of the element to scroll to.
 * @param offset The offset from the top of the element to scroll to. Default
 * is 50 which is equal to the fixed header height.
 */
export function scrollToElementById(id: string, offset = 60): void {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Failed to find and scroll to element with id "${id}".`);
    return;
  }
  scrollToElement(element, offset);
}

/** Smoothly scroll to the top of the page. */
export function scrollTop(): void {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: 0,
  });
}
