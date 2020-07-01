import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, Animated} from 'react-native';

export const Container = styled(Animated.View)`
  width: 60px;
  height: 60px;
  background-color: #333;
  border-radius: 30px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-right: 60px;
  margin-left: 20px;
  color: #999;
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #2980b9;
  position: absolute;
  right: 0px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
})`
  color: #fff;
  font-size: 25px;
`;
