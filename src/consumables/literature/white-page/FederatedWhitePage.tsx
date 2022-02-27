import React from 'react';
import DynamicComponentWrapper from '../../../components/DynamicComponentWrapper';
const FederatedWhitePage = (props: any) => 
<DynamicComponentWrapper 
    url="http://localhost:4001/remoteEntry.js"
    scope='whitePage'
    module='./WhitePaperPage'
    fallbackKey='white-page-4001'
    {...props}
/>;

export default FederatedWhitePage;