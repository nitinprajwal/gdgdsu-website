import { NavItems } from './types';

export const navItems: NavItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' }
] as const;