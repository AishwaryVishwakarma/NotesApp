import {type ParticlesProps} from '../CustomParticles/CustomParticles';
import {type NavbarProps} from '../Navbar/Navbar';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showParticles?: boolean;
  particleProps?: ParticlesProps;
  showNavbar?: boolean;
  navbarProps?: NavbarProps;
  layouted?: boolean;
  queryParams?: QueryParams;
}
