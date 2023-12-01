const SpacecraftIcons = {
    ANTENNA: 'public/icons/antenna.png',
    BUS: 'public/icons/bus_with_structure.png',
    GAMMA_RAY: 'public/icons/gamma_ray.png',
    LEFT_WING: 'public/icons/left_wing.png',
    NEUTRON_SPECTROMETER: 'public/icons/neutron_spectrometer.png',
    RIGHT_WING: 'public/icons/right_wing.png',
  };
  
  const SpacecraftComponents = {
    ANTENNA: '/models/gltf-files/antenna.gltf',
    BUS: '/models/gltf-files/bus.gltf',
    BUS_WITH_STRUCTURE: '/models/gltf-files/bus_with_structure.gltf',
    GAMMA_RAY: '/models/gltf-files/gamma_ray.gltf',
    LEFT_WING: '/models/gltf-files/left_wing.gltf',
    NEUTRON_SPECTROMETER: '/models/gltf-files/neutron_spectrometer.gltf',
    RIGHT_WING: '/models/gltf-files/right_wing.gltf',
  };
  
  export { SpacecraftIcons, SpacecraftComponents };
  
  import buttonPress from '/audio/button_press.mp3';

  export const BUTTON_PRESS = buttonPress;