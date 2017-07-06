declare class IntersectionObserver {
  constructor(any, options?: any): void;
	observe(any): any;
}

declare module 'electron-devtools-installer' {
  declare module.exports: any => any;
}

declare module 'react-event-listener' {
  declare module.exports: any => any;
}

declare var module: {
  hot: {
    accept: (s: string, f: () => void) => void,
  },
}

declare class Notification {
  constructor(title: string, opts? : {icon?: string, body?: string, url?: string}): void;
  onclick: Function;
}
