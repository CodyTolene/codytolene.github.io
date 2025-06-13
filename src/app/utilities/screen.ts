export function getRefreshRate(): Promise<number> {
  return new Promise((resolve) => {
    const samples: number[] = [];
    let last = performance.now();

    const sample = (): void => {
      const now = performance.now();
      const delta = now - last;
      last = now;
      samples.push(delta);

      if (samples.length < 20) {
        requestAnimationFrame(sample);
      } else {
        const avg = samples.reduce((sum, v) => sum + v, 0) / samples.length;
        const fps = Math.round(1000 / avg);
        resolve(fps);
      }
    };

    requestAnimationFrame(sample);
  });
}
