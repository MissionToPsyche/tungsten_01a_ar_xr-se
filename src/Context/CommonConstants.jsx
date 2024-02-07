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
    BUS: '/models/gltf-files/bus_and_structure.gltf',
    GAMMA_RAY: '/models/gltf-files/gamma_ray_scaled.gltf',
    LEFT_WING: '/models/gltf-files/left_wing.gltf',
    NEUTRON_SPECTROMETER: '/models/gltf-files/Neutron_Spectrometer_Scaled.gltf',
    RIGHT_WING: '/models/gltf-files/right_wing.gltf',
  };

  const InstructionPictures = {
    TILE: 'public/pictures/HelpPage2.png',
    SHADE_COLOR: ' public/pictures/NewShadetoColor3.png'
  }

  
  export { SpacecraftIcons, SpacecraftComponents, InstructionPictures };
  
  import buttonPress from '/audio/button_press.mp3';

  export const BUTTON_PRESS = buttonPress;
