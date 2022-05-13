export function calculateDateSince(pastDate: Date): string {
  const msecDiff = new Date().getTime() - pastDate.getTime();
  const daysDiff = Math.floor(msecDiff / (1000 * 3600 * 24));
  // TODO: Return date since with all values
  return `(${daysDiff} days)`;
}
