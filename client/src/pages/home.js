import React from 'react';
import styled from 'styled-components';

const HomeBackground = styled.div`
  background-attachment: fixed;
  background-color: lightcyan;
`;

const Home = () => {
  return (
    <HomeBackground>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
        <h1>Welcome User to Courtennis</h1>
      </div>
    </HomeBackground>
  );
};

export default Home;