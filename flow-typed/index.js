declare module 'react-css-modules' {
	declare var exports: any;
}

declare module 'babel-polyfill' {
	declare var exports: any;
}

declare module 'pixiv.js' {
	declare var exports: any;
}

declare module 'humps' {
	declare function camelizeKeys(target: Object): Object;
}

declare class IntersectionObserver {
	observe(): () => void;
}

declare module 'redux-logger' {
	declare var exports: any;
}

declare module 'redux-thunk' {
	declare var exports: any;
}
