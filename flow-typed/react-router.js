import React from 'react';

declare module 'react-router' {
  declare interface ReactRouter extends React.Component<*, *, *> {
    IndexRoute: React.Component<*, *, *>;
    Link: React.Component<*, *, *>;
    Redirect: React.Component<*, *, *>;
    IndexRedirect: React.Component<*, *, *>;
    Route: React.Component<*, *, *>;
    Router: React.Component<*, *, *>;
    browserHistory: any;
    useRouterHistory: (historyFactory: Function) => (options: ?Object) => Object;
    match: Function;
    RouterContext: React.Component<*, *, *>;
    createRoutes: (routes: React$Element<*>) => Array<Object>;
    formatPattern: (pattern: string, params: Object) => string;
  }
  declare var exports: ReactRouter;
}

declare module 'react-router/lib/PatternUtils' {
  declare var exports: any;
}

declare module 'history/lib/createBrowserHistory' {
  declare var exports: any;
}
