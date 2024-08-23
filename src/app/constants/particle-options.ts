import { ParticleOptions } from 'particles.js';

export const PARTICLE_OPTIONS: ParticleOptions = {
  interactivity: {
    detect_on: 'canvas',
    events: {
      onclick: {
        enable: false,
        mode: 'repulse',
      },
      onhover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 2,
        opacity: 0,
        size: 0,
        speed: 3,
      },
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    line_linked: {
      color: '#86c232',
      distance: 500,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 200,
    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 0,
        speed: 1,
        sync: false,
      },
      random: true,
      value: 1,
    },
    shape: {
      image: {
        height: 100,
        src: '',
        width: 100,
      },
      polygon: {
        nb_sides: 5,
      },
      stroke: {
        color: '#000000',
        width: 0,
      },
      type: 'circle',
    },
    size: {
      anim: {
        enable: false,
        size_min: 0.3,
        speed: 1.3,
        sync: false,
      },
      random: true,
      value: 3,
    },
  },
  retina_detect: false,
} as const;
