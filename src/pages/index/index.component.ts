import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faAngular,
  faDocker,
  faHtml5,
  faDev,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCloud,
  faGamepad,
  faCode,
  faLaptopCode,
  faEnvelopeOpenText,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons';

// tslint:disable-next-line:no-any
declare let particlesJS: any;

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.scss'],
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  // Brand Font Awesome icons
  public readonly faLinkedin = faLinkedin;
  public readonly faAngular = faAngular;
  public readonly faDocker = faDocker;
  public readonly faHtml5 = faHtml5;
  public readonly faDev = faDev;
  public readonly faTwitter = faTwitter;
  public readonly faGithub = faGithub;

  // Regular Font Awesome icons
  public readonly faAngleDoubleLeft = faAngleDoubleLeft;
  public readonly faAngleDoubleRight = faAngleDoubleRight;
  public readonly faCloud = faCloud;
  public readonly faGamepad = faGamepad;
  public readonly faCode = faCode;
  public readonly faLaptopCode = faLaptopCode;
  public readonly faEnvelopeOpenText = faEnvelopeOpenText;
  public readonly faPhoneSquare = faPhoneSquare;

  public ngOnInit(): void {
    this.loadParticlesJs();
  }

  public loadParticlesJs(): void {
    try {
      particlesJS('particles-js', particlesJSParameters);
    } catch (error) {
      console.warn('Failed to load particles.');
    }
  }
}

const particlesJSParameters = {
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
};
