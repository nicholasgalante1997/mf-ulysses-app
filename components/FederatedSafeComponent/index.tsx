/* eslint-disable react/display-name */
import React from 'react';
import FederatedWrapper from './FederatedWrapper';

export const safeWrapFederatedComponent = (Component) => ({ error, delayed, fallbackKey, ...props}) => (
    <FederatedWrapper error={error} delayed={delayed} fallbackKey={fallbackKey}>
        <Component {...props} />
    </FederatedWrapper>
);