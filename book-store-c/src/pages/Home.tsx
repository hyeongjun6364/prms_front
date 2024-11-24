import Title from '@/components/common/Title';
import { useEffect } from 'react';
import styled from 'styled-components';

const Home = () => {
  useEffect(() => {}, []);

  return (
    <HomeStyle>
      <Title size="large" color="text">
        내용
      </Title>
    </HomeStyle>
  );
};
const HomeStyle = styled.div`
  color: ${({ theme }) => theme.color.primary};
`;

export default Home;
