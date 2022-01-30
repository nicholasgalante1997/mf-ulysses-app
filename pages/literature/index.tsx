import type { NextPage } from 'next';
import { useRemoteObject } from '../../src/custom-hooks';

const LiteraturePage: NextPage = () => {
    const { scriptReady, scriptFailed, error, isLoading, target } = useRemoteObject(
        'http://localhost:4002/remoteEntry.js',
        'app_data',
        './appData'
    )

    if (scriptReady) {
        console.log('scriptReady: true')
    }

    if (scriptFailed) {
        console.log('scriptFailed: true')
    }

    if (error) {
        console.error('useRemoteObject errored out')
    }

    if (isLoading) {
        console.log('useRemoteObject is loading')
    }

    if (target) {
        console.log('target' + ' / ' + JSON.stringify(target))
    }

    return (
        <div>
            Literature Page
        </div>
    );
}

export default LiteraturePage;