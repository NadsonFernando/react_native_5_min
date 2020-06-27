import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  width: 80px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Ball = styled(Animated.View)`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({color}) => color || '#777'};
`;
