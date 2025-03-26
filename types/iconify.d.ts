declare global {
  interface Window {
    Iconify?: {
      scan: (target?: HTMLElement) => void;
    }
  }
}

export {}; 