import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100vw;
    min-height: 2rem;
    justify-content: flex-start;
    align-items: center;
    color: deeppink;
    font-size: large;
    padding: 0.5rem;
`;

const StyledHeading = styled.h2`

`;


const NavBar: React.FunctionComponent<{}> = ({ children }) => (
    <StyledDiv>
        <StyledHeading>Whats Next?</StyledHeading>
        <div style={{ marginLeft: '5vw', display: 'flex', flexDirection: 'row'}}>
            <Link href="/">
                Home
            </Link>
            <Link href="/literature">
                Literature
            </Link>
        </div>
    </StyledDiv>
);
  
  export default NavBar;