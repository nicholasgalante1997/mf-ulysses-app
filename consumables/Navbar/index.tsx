import React from 'react';
import DynamicComponentWrapper from '../../components/DynamicComponentWrapper';

const FederatedNavbar = (props: any) => (
    <DynamicComponentWrapper
        url={"http://localhost:4001/remoteEntry.js"}
        scope={"nav"}
        module={"./Nav"}
        fallbackKey='navbar'
        {...props}
      />
);

export default FederatedNavbar;