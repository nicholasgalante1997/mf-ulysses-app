import React from 'react';
import { useDynamicScript } from './useDynamicScript';

const resolveModule = async (scope: string, module: string) => new Promise<{ default: any }>(
  (moduleResolve) => {
    new Promise((containerResolve) => {
      containerResolve(window[scope].init({}));
    }).then(() => {
      window[scope].get(module).then((factory) => {
        moduleResolve(factory());
      });
    });
  }
);

const transferModule = async (scope: string, module: string) => {
    const resolvedObject = await resolveModule(scope, module);
    return resolvedObject;
};

export const useRemoteObject = (
    url: string,
    scope: string,
    module: string,
) => {
    const { ready, failed } = useDynamicScript(url);
    const [error, setError] = React.useState(false);
    const [target, setTarget] = React.useState<any>(null);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        if (failed) {
            console.error('issue appending script with a url of ' + url);
            setError(true);
            setIsLoading(false);
        }

        if (!ready && !failed) {
            console.log('appending script tag');
            setIsLoading(true);
        }

        if (ready) {
            (async () => {
                const loadedModule = await transferModule(scope, module);
                setTarget(loadedModule);
                setIsLoading(false);
            })()
        }

    }, [ ready, failed ]);

    return {
        scriptReady: ready,
        scriptFailed: failed,
        error,
        isLoading,
        target
    };
};