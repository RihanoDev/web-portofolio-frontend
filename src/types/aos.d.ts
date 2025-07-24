declare module 'aos' {
  export function init(options?: {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }): void;

  export function refresh(): void;
}
