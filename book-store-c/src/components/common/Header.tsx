import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return (
    <HeaderSytle>
      <h1>BookStore</h1>
    </HeaderSytle>
  );
};

const HeaderSytle = styled.header`
  background-color: ${({ theme }) => theme.color.background};
  h1 {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default Header;
