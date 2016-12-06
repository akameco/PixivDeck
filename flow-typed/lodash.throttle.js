declare module 'lodash.throttle' {
	declare type ThrottleOptions = {
		leading?: bool,
		trailing?: bool,
	};
	declare module.exports: (
		func: Function,
		wait?: number,
		options?: ThrottleOptions,
	) => Function;
}
