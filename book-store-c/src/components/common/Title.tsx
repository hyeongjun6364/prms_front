import { ReactNode } from 'react';
import styled from 'styled-components';
import { ColorKey, HeadingSize } from '../../style/theme';

interface Props {
  children: ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}

const TitleStyle = styled.h1<Omit<Props, 'children'>>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.primary};
`;

const Title = ({ children, size, color }: Props) => {
  return (
    <TitleStyle size={size} color={color}>
      {children}
    </TitleStyle>
  );
};

export default Title;
