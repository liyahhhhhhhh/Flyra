import { Platform } from 'react-native';

export const Colors = {
  light: {
    background: '#FFFFFF',
    text: '#0B1D3A',
    secondary: '#64748B',
    card: '#F2F5FA',
    accent: '#1248B8',
    border: '#E3EAF3',
  },
  dark: {
    background: '#0B1D3A',
    text: '#FFFFFF',
    secondary: '#9AC2EA',
    card: '#122B50',
    accent: '#9AC2EA',
    border: '#24436D',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});
