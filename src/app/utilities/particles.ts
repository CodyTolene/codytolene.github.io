/**
 * Particle.js particle movement is tied to `requestAnimationFrame`, which
 * runs once per screen refresh, so on faster displays, animations happen
 * more frequently and appear faster than intended.
 *
 * This function normalizes the speed of partices based on the current users
 * refresh rate to normalize the animation fps.
 */
export function adjustSpeed(base: number, fps: number): number {
  return Math.max(base * (60 / fps), 0.1);
}
