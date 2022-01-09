import React from 'react';
import { useDynamicScript } from '../../custom-hooks';
import { safeWrapFederatedComponent } from '../FederatedSafeComponent'

export interface DyanamicComponentProps {
    url: string;
    scope: string;
    module: string;
    fallbackKey: string;
    [x: string]: any;
}

const DynamicComponentWrapper: React.FunctionComponent<DyanamicComponentProps> = ({ url, scope, module, fallbackKey, ...props }) => {
    const { ready, failed } = useDynamicScript(url);
  
    if (!ready) {
      return <h2>Loading dynamic script: {url}</h2>;
    }
  
    if (failed) {
      return <h2>Failed to load dynamic script: {url}</h2>;
    }
  
    const Component = React.lazy(
      () =>
        new Promise((moduleResolve) => {
          const react = require("react");
          const legacyShareScope = {
            react: {
              [react.version]: {
                get: () =>
                  new Promise((reactResolve) => {
                    reactResolve(() => react);
                  }),
                loaded: true,
                from: "webpack4",
              },
            },
          };
          new Promise((contaierResolve) => {
            contaierResolve(window[scope].init(legacyShareScope));
          }).then(() => {
            window[scope].get(module).then((factory) => {
              moduleResolve(factory());
            });
          });
        })
    );

    const SafeComponent = safeWrapFederatedComponent(Component);

    return (
       <SafeComponent 
          delayed={`Loading federated component with a key of ${fallbackKey}`}
          error={`An error has occurred loading remote ${fallbackKey}`}
          fallbackKey={fallbackKey}
          {...props}
        />
    );
};  

export default DynamicComponentWrapper;