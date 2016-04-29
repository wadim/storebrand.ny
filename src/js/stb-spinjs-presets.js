
// STB-specific spin config, extends spin.js+jquery.spin.js

$.fn.spin.presets = {
  stb: {
    lines: 13, length: 28, width: 14, radius: 47,
    scale: 0.75, corners: 1, color: '#da291c',
    opacity: 0.25, speed: 1.2, trail: 64
  },
  tiny: { lines: 8, length: 2, width: 2, radius: 3 },
  small: { lines: 8, length: 4, width: 3, radius: 5 },
  large: { lines: 10, length: 8, width: 4, radius: 8 }
};