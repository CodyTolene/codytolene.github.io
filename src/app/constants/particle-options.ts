import { ParticleOptions } from 'particles.js';

export const PARTICLE_GALAXY_WHITE: ParticleOptions = {
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
      image: undefined,
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

export const PARTICLE_GALAXY_BLACK: ParticleOptions = {
  particles: {
    number: {
      value: 118,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#000000',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: undefined,
    },
    opacity: {
      value: 0.08,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#000000',
      opacity: 0.05,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
} as const;

export const PARTICLE_HEXAGONS: ParticleOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: '#00ff69',
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 0,
        color: '#000',
      },
      polygon: {
        nb_sides: 6,
      },
      image: undefined,
    },
    opacity: {
      value: 0.015,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 160,
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: '#ffffff',
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
} as const;
