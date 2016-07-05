import React from 'react';

declare module 'react-redux' {
  declare interface ConnectedReactClass extends React.Component<*, *, *> {
    static WrappedComponent: React.Component<*, *, *>;
    getWrappedInstance(): React.Component<*, *, *>;
  }
  declare var Provider: React.Component<*, *, *>;
  declare function connect(mapStateToProps?: (state: Object, ownProps: Object) => Object, mapDispatchToProps?: any, mergeProps?: (stateProps: any, dispatchProps: any, ownProps: any) => any, options?: {
    pure?: bool,
    withRef?: bool,
  }): (component: React.Component<*, *, *>) => Class<ConnectedReactClass>;
}
