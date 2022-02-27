import type { NextPage } from 'next';
import { useFederatedModule } from 'react-federated-module-loader';

const LiteraturePage: NextPage = () => {
    const { scriptReady, scriptFailed, error, isLoading, data } = useFederatedModule(
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

    if (data) {
        console.log('target' + ' / ' + JSON.stringify(data))
    }

    return (
        <div style={{padding: 32, color: 'palegoldenrod'}}>
            Literature Page
        </div>
    );
}

export default LiteraturePage;