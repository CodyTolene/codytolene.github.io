import { Project } from 'src/app/types';

export const HOBBY_PROJECTS: Project[] = [
  {
    title: 'Pip Apps',
    role: 'Open-source games and apps',
    description:
      'Community-driven collection of apps and games for the Pip-Boy 3000 Mk V. ' +
      'Built with Espruino/JavaScript and Node.js, this fork of the official mod ' +
      'tool hosts open-source apps and games created by fellow vault dwellers on ' +
      'pip-boy.com and provides a development environment for constrained ' +
      'devices.',
    imageUrl: 'images/projects/pip-apps_x92.png',
    stack: [
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'Node.js', icon: 'nodedotjs' },
      { label: 'Docker', icon: 'docker' },
      { label: 'Espruino', icon: 'espruino' },
      { label: 'Pip-Boy 3000 Mk V', icon: 'pip-boy-3000-mk-v' },
      { label: 'Embedded', icon: 'memory' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/CodyTolene/pip-boy-apps' },
    ],
  },
  {
    title: 'Pro Angular pro-ject',
    role: 'CLI scaffolding and automation',
    description:
      'Opinionated CLI that scaffolds modern Angular 20-21 applications. ' +
      'It guides project creation with a consistent structure, best-practice ' +
      'defaults and automation to speed up new app setup.',
    imageUrl: 'images/projects/pro-angular-pro-ject_x92.png',
    stack: [
      { label: 'Angular', icon: 'angular' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Node.js', icon: 'nodedotjs' },
      { label: 'Tooling', icon: 'refinedgithub' },
      { label: 'CI/CD', icon: 'githubactions' },
      { label: 'CLI', icon: 'terminal' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/ProAngular/pro-ject' },
    ],
  },
  {
    title: 'Lambda Cyberdeck',
    role: 'Hardware build and guide',
    description:
      'Step-by-step guide for building an SDR cyberdeck inside a compact Nanuk 910 ' +
      'case. This project uses a Raspberry Pi 4, a 7-inch display, various ' +
      'I/O ports and custom 3D-printed hardware to create a portable cyberdeck, ' +
      'with detailed hardware lists and assembly instructions for customizing your ' +
      'own build.',
    imageUrl: 'images/projects/lambda-cyberdeck_x92.png',
    stack: [
      { label: 'Python', icon: 'python' },
      { label: 'Raspberry Pi', icon: 'raspberrypi' },
      { label: '3D Print', icon: '3d' },
      { label: 'Linux', icon: 'linux' },
      { label: 'SDR', icon: 'radio' },
      { label: 'Embedded', icon: 'memory' },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/CodyTolene/Lambda-Cyberdeck-910',
      },
    ],
  },
  {
    title: 'Pico Portal',
    role: 'Device UI and local web portal',
    description:
      'Turns a Raspberry Pi Pico W into a portable Wi-Fi access point with a ' +
      'lightweight captive portal. It serves web pages, displays real-time ' +
      'connection info on the onboard screen and logs connection details for ' +
      'network testing or demos. Built in MicroPython with options for hosting ' +
      'single-page apps or captive portals.',
    imageUrl: 'images/projects/pico-portal_x92.png',
    stack: [
      { label: 'Python', icon: 'python' },
      { label: 'Raspberry Pi', icon: 'raspberrypi' },
      { label: 'MicroPython', icon: 'micropython' },
      { label: 'HTML5', icon: 'html5' },
      { label: 'Wi-Fi', icon: 'wifi' },
      { label: 'Security', icon: 'shield' },
      { label: 'Embedded', icon: 'memory' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/CodyTolene/Pico-Portal' },
    ],
  },
  {
    title: 'Pocket Pi',
    role: 'Hardware utility and app shell',
    description:
      'Portable Raspberry Pi Zero 2 W build with a 1.3-inch IPS display, joystick, ' +
      'buttons and battery module. This guide helps you assemble the hardware and ' +
      'install Raspberry Pi OS to create a pocket-sized system with clean ' +
      'navigation and simple workflows.',
    imageUrl: 'images/projects/pocket-pi_x92.png',
    stack: [
      { label: 'Python', icon: 'python' },
      { label: 'Raspberry Pi', icon: 'raspberrypi' },
      { label: 'Linux', icon: 'linux' },
      { label: '3D Print', icon: '3d' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/CodyTolene/Pocket-Pi' },
    ],
  },
  {
    title: 'Pip Converter',
    role: 'Media conversion tooling',
    description:
      'Media conversion tool that prepares video and music files for the Pip-Boy ' +
      '3000 Mk V device. Features batch conversion, adjustable volume gain and ' +
      'video scaling (defaults to 480x320) for predictable playback on the ' +
      'device, implemented in Python with ffmpeg.',
    imageUrl: 'images/projects/pip-converter_x92.png',
    stack: [
      { label: 'Python', icon: 'python' },
      { label: 'Tooling', icon: 'refinedgithub' },
      { label: 'Pip-Boy 3000 Mk V', icon: 'pip-boy-3000-mk-v' },
      { label: 'FFmpeg', icon: 'ffmpeg' },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/CodyTolene/pip-boy-3000-mk-v-media-converter',
      },
    ],
  },
  {
    title: 'TV Converter',
    role: 'Media pipeline and automation',
    description:
      'Open-source batch conversion utility that mass-converts videos for the ' +
      'TinyTV® 2 device. It converts entire lists of files, reduces file sizes ' +
      'for FAT32 limits, offers multiple quality settings, auto-numbers channels ' +
      'and merges clips into a single file for easy viewing.',
    imageUrl: 'images/projects/tv-converter_x92.png',
    stack: [
      { label: 'Python', icon: 'python' },
      { label: 'Tooling', icon: 'refinedgithub' },
      { label: 'FFmpeg', icon: 'ffmpeg' },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/CodyTolene/tiny-tv-2-batch-conversion-tool',
      },
    ],
  },
  {
    title: 'Red Portals',
    role: 'Creative UI and interaction',
    description:
      'Educational collection of “Evil Portal” templates for wireless security ' +
      'research. These realistic captive-portal pages are built with only HTML ' +
      'and SCSS (no JavaScript) to help penetration testers and researchers ' +
      'understand and mitigate network vulnerabilities.',
    imageUrl: 'images/projects/red-portals_x92.png',
    stack: [
      { label: 'HTML5', icon: 'html5' },
      { label: 'SCSS', icon: 'sass' },
      { label: 'Tooling', icon: 'refinedgithub' },
      { label: 'Wi-Fi', icon: 'wifi' },
      { label: 'Security', icon: 'shield' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/CodyTolene/Red-Portals' },
    ],
  },
  {
    title: 'Unicorn Pi',
    role: 'Hardware display experiments',
    description:
      'Python software for cycling through and displaying LED effects on a ' +
      'Raspberry Pi Pico equipped with the Pimoroni Unicorn Pack. Users can ' +
      'switch between animations using on-device buttons, and the last selected ' +
      'effect is saved for the next boot. Designed to be easy to extend with new ' +
      'effects.',
    imageUrl: 'images/projects/unicorn-pi_x92.png',
    stack: [
      { label: 'Python', icon: 'python' },
      { label: 'Raspberry Pi', icon: 'raspberrypi' },
      { label: 'MicroPython', icon: 'micropython' },
      { label: 'Tooling', icon: 'refinedgithub' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/CodyTolene/Unicorn-Pi' },
    ],
  },
  {
    title: 'Unicorn Pi Galactic',
    role: 'Hardware display experiments',
    description:
      'Software for the Pimoroni Galactic Unicorn board that brings LED effects ' +
      'and animations to life. Users can switch views, customize text colors, ' +
      'adjust brightness and even enjoy animations with sound or Wi-Fi features. ' +
      'Written in Python and designed to be easy to tweak and extend.',
    imageUrl: 'images/projects/unicorn-pi-galactic_x92.png',
    stack: [
      { label: 'Python', icon: 'python' },
      { label: 'Raspberry Pi', icon: 'raspberrypi' },
      { label: 'MicroPython', icon: 'micropython' },
      { label: 'Tooling', icon: 'refinedgithub' },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/CodyTolene/Unicorn-Pi-Galactic',
      },
    ],
  },
  {
    title: 'F0 Dev Kit',
    role: 'Device tools and UX experiments',
    description:
      'Comprehensive development toolkit for the Flipper Zero device. It provides ' +
      'hardware and software setup instructions, cross-compilation guides and ' +
      'GitHub Actions workflows for building and packaging Flipper applications, ' +
      'helping you publish your own Flipper apps quickly.',
    imageUrl: 'images/projects/f0-dev-kit_x92.png',
    stack: [
      { label: 'C', icon: 'c' },
      { label: 'Automation', icon: 'githubactions' },
      { label: 'Embedded', icon: 'memory' },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/CodyTolene/Flipper-Zero-Development-Toolkit',
      },
    ],
  },
  {
    title: 'F0 Camera Suite',
    role: 'Device tools and UI workflow',
    description:
      'Firmware and software suite that enables an ESP32-CAM module to work with ' +
      'the Flipper Zero. Capture photos and stream video to the device while ' +
      'personalizing camera settings such as orientation, dithering, flash, ' +
      'haptic feedback, sound effects and LED effects. Future updates will ' +
      'expand functionality.',
    imageUrl: 'images/projects/f0-camera-suite_x92.png',
    stack: [
      { label: 'C', icon: 'c' },
      { label: 'Automation', icon: 'githubactions' },
      { label: 'Embedded', icon: 'memory' },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/CodyTolene/Flipper-Zero-Camera-Suite',
      },
    ],
  },
  {
    title: 'Stable Diffusion AI',
    role: 'Tooling and automation experiments',
    description:
      'Quick-start guide for running Stable Diffusion using the AUTOMATIC1111 WebUI ' +
      'on Windows. The guide walks you through installing Python, downloading the ' +
      'WebUI and models, launching the server and using ControlNet for advanced image ' +
      'generation techniques.',
    imageUrl: 'images/projects/stable-diffusion-ai_x92.png',
    stack: [
      { label: 'Batch', icon: 'terminal' },
      { label: 'Tooling', icon: 'refinedgithub' },
      { label: 'AI', icon: 'googlegemini' },
      { label: 'LVM', icon: 'visibility' },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/CodyTolene/stable-diffusion-qsg',
      },
    ],
  },
  {
    title: '3D Printing Library',
    role: 'Open-source automation and tooling',
    description:
      'Curated collection of free 3D-printable models and supporting scripts for ' +
      'makers. Explore and remix designs for Flipper Zero accessories, game ' +
      'cartridge panels and more, with documentation and automation scripts to ' +
      'assist in building and maintaining your print projects.',
    imageUrl: 'images/projects/3d-printing_x92.png',
    stack: [{ label: '3D Print', icon: '3d' }],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/CodyTolene/3D-Printing',
      },
    ],
  },
];
