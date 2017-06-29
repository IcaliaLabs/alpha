import styled from 'styled-components';
import {
  chatBorderColor,
  textColor,
  onlineColor,
  offlineColor,
} from '../../customization/styleVariables';

export const Header = styled.header`
  border-bottom: 1px solid ${chatBorderColor};
  padding: 1.25rem;
  width: 100%;
  justify-content: space-between;
  display: flex;
`;
export const BotName = styled.h2`
  color: ${textColor};
  display: inline-block;
  font-weight: 600;
  vertical-align: middle;
  &:after {
    border-radius: 50%;
    content: '';
    display: inline-block;
    margin-left: 0.375rem;
    padding: 0.375rem;
    vertical-align: middle;
    background: ${(props) => props.isOnline ? onlineColor : offlineColor}; 
    transition: background-color 0.5s ease;
  }
`;
