import React from 'react';
import DynamicComponentWrapper from '../../components/DynamicComponentWrapper';
const FederatedHomePage = (props: any) => 
<DynamicComponentWrapper 
    url="http://localhost:4003/remoteEntry.js"
    scope='home'
    module='./HomePage'
    fallbackKey='home-page-4003'
    {...props}
/>;

export default FederatedHomePage;