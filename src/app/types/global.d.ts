declare global {
  function particlesJS(tagId: string, params: ParticleOptions): void;

  interface Window {
    particlesJS: typeof particlesJS;
  }
}

export {};
