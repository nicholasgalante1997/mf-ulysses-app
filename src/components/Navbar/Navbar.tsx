import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background-color: black;
    color: white;

    font-size: large;

    padding: 0.5rem;
    min-width: 100vw;
    min-height: 2rem;
`;

const StyledHeading = styled.h2`
  padding-left: 16px;
`;

const StyledNextLink = styled.a`
  padding-left: 8px;
  padding-right: 8px;
`


const NavBar: React.FunctionComponent<{}> = ({ children }) => (
    <StyledDiv>
        <StyledHeading>Whats Next?</StyledHeading>
        <div style={{ marginLeft: '5vw', display: 'flex', flexDirection: 'row'}}>
            <Link href="/" passHref>
                <StyledNextLink>
                    Home
                </StyledNextLink>
            </Link>
            <Link href="/literature" passHref>
                <StyledNextLink>
                    Literature
                </StyledNextLink>
            </Link>
           <Link href="/claims" passHref>
                <StyledNextLink>
                    Popular Claims
                </StyledNextLink>
           </Link>
            <Link href="/claims/create" passHref>
                <StyledNextLink>
                    Create a claim
                </StyledNextLink>
            </Link>
           <Link href="/claims/f/user/{{userid}}" passHref>
                <StyledNextLink>
                    Actively Tracking
                </StyledNextLink>
           </Link>
        </div>
    </StyledDiv>
);
  
  export default NavBar;