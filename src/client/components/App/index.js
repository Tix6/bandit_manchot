import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Fruit from './fruit';

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: red;
  margin: 0
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Fruits = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 80%;
  margin: 3em;
`;

const App = ({ fruits }) => (
  <Wrapper>
    <Title>One Armed Bandit</Title>
    <p>Refresh to relaunch.</p>
    <Fruits>
      { fruits.map(fruit => <Fruit {...fruit} key={fruit.id} />) }
    </Fruits>
  </Wrapper>
);

App.propTypes = {
  fruits: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  fruits: state.fruits,
});

export default connect(mapStateToProps, null)(App);
