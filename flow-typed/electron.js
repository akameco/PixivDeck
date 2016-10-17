declare class EventEmitter {
	static listenerCount(emitter: EventEmitter, event: string): number;

	addListener(event: string, listener: Function): EventEmitter;
	on(event: string, listener: Function): EventEmitter;
	once(event: string, listener: Function): EventEmitter;
	removeListener(event: string, listener: Function): EventEmitter;
	removeAllListeners(event?: string): EventEmitter;
	setMaxListeners(n: number): void;
	listeners(event: string): Function[];
	emit(event: string, ...args: any[]): boolean;
}

declare module 'electron' {
	declare type IpcEvent = {
		returnValue: string,
		sender: webContents
	}

	declare type detail = {
		id: number,
		url: string,
		method: string,
		resourceType: string,
		timestamp: number,
		requestHeaders: Object
	};

	declare type response = {
		cancel?: bool,
		requestHeaders?: Object
	};

	declare function listener(detail: detail, callback: () => void): response;

	declare class WebRequest {
		onBeforeSendHeaders(filter: Object, listener: listener): void;
	}

	declare class Session {
		webRequest: WebRequest;
	}

	declare class webContents {
		on(event: 'did-finish-load', listener: (event: any, options: any) => void): void;
		on(event: 'did-finish-load', listener: Promise<(event: any, options: any) => void>): void;
		on(event: 'new-window', listener: (event: any, url: string) => void): void;
		on(event: 'will-navigate', listener: (event: any, url: string) => void): void;
		on(event: 'dom-ready', listener: (event: any) => void): void;

		static loadURL(url: string, options?: any): void;

		getTitle(): string;
		isLoading(): any;
		reload(): void;
		toggleDevTools(): void;
		send(channel: string, arg?: any): void;
		session: Session;
	}

	declare class BrowserWindow extends EventEmitter {
		openDevTools(): void;
		loadURL(url: string, options: any): void;
		close(): void;
		reload(): void;
		getTitle(): string;
		getBounds(): {x: number, y: number, width: number, height: number};
		static on(event: 'page-title-updated' | 'close'): EventEmitter;
		static addDevToolsExtension(path: string): void;
		static removeDevToolsExtension(name: string): void;
		webContents: webContents;
		constructor(options?: Object): this;
	}

	declare class ipcRenderer {
		static on(channel: string, callback: (event: Event, data: Object) => void): EventEmitter;
		static send(channel: string, arg?: any): EventEmitter;
	}

	declare function _callback(event: IpcEvent, data: Object): void;

	declare class ipcMain {
		static on(channel: string, callback: (_callback | Promise<_callback>)): EventEmitter;
		static send(channel: string, arg?: any): EventEmitter;
	}

	declare class app {
		static on(event: 'activate' | 'ready' | 'window-all-closed', listener: () => void): void;
		static quit(): void;
		static getPath(path: string): string;
	}

	declare class shell {
		static openExternal(url: string): void;
	}

	declare class MenuItem {
		static constructor(options: {
			label: string,
			click(): void
		}): MenuItem;
	}

	declare class Menu {
		static setApplicationMenu(appMenu: Object): void;
		popup: (win: BrowserWindow) => void;
		append: (item: MenuItem) => void;
	}

	declare class remote {
		static Menu: Class<Menu>;
		static MenuItem: Class<MenuItem>;
		static getCurrentWindow: () => BrowserWindow;
	}
}
