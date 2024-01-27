'use client';

import {
  type IOptions,
  type ISourceOptions,
  type RecursivePartial,
} from '@tsparticles/engine';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import React from 'react';
import {loadFull} from 'tsparticles';

export interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: ISourceOptions;
}

const defaultConfig: ISourceOptions = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      grab: {
        distance: 300,
        link_linked: {
          opacity: 0.5,
        },
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: {min: 1, max: 5},
    },
  },
  detectRetina: true,
};

const CustomParticles: React.FC<ParticlesProps> = ({
  config = defaultConfig,
  ...rest
}) => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine): Promise<void> => {
      await loadFull(engine);
    }).then((): void => {
      setInit(true);
    });
  });

  const options: ISourceOptions = React.useMemo(
    (): RecursivePartial<IOptions> => config,
    [config]
  );

  return init ? (
    <Particles id='tsparticles' options={options} {...rest} />
  ) : null;
};

export default CustomParticles;
