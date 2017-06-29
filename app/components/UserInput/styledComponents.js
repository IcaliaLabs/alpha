import styled from 'styled-components';
import SendWhite from './sendWhite.svg';
import RefreshWhite from './refreshWhite.svg';
import {
  buttonBGColor,
  buttonDisabledBGColor,
  chatBGColor,
  buttonTextColor,
  buttonDisabledTextColor,
  chatBorderColor,
  textColor,
  buttonRefreshBGColor,
} from '../../customization/styleVariables';

export const SubmitButton = styled.button`
  border: 0;
  font-size: 0.875em;
  font-weight: 500;
  outline: 0;
  padding: 1rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-radius: 0.25rem;
  cursor: default;
  @media (max-width: 640px) {
    display: none;
  }
  background: ${(props) => {
    if (props.disabled) {
      return chatBGColor;
    } else if (props.refresh) {
      return buttonRefreshBGColor;
    } return buttonBGColor;
  }};
  color: ${(props) => props.disabled ? buttonDisabledTextColor : buttonTextColor};
  box-shadow: ${(props) => props.disabled ? 'none' : '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)'};
  position: ${(props) => props.hasTags ? 'absolute' : 'relative'};
  right: ${(props) => props.hasTags ? '0.625rem' : 0};
  bottom: ${(props) => props.hasTags ? 0 : 'initial'};
`;

export const SubmitButtonSmall = styled.button`
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border: 0;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 0.625rem;
  background: url(${(props) => props.refresh ? RefreshWhite : SendWhite}) no-repeat center center;
  background-color: ${(props) => {
    if (props.disabled) {
      return chatBGColor;
    } else if (props.refresh) {
      return buttonRefreshBGColor;
    }
    return buttonBGColor;
  }};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  @media (min-width: 641px) {
    display: none;
  }
  &:disabled{
    background-color: ${buttonDisabledBGColor};
  }
  top: ${(props) => props.hasTags ? 0 : 'initial'};
  transform: ${(props) => props.hasTags ? 'translateY(-50%)' : 'translateY(0%)'};
  z-index: ${(props) => props.hasTags ? 10 : 'initial'};
`;
export const SubmitButtonSmallDisabled = SubmitButtonSmall.extend`
  cursor: default;
  background-color: ${buttonDisabledBGColor};
`;

export const UserOptions = styled.section`
  background: ${chatBGColor};
  border-top: 1px solid ${chatBorderColor};
  padding: 1.25rem;
  width: 100%;
  position: relative;
  @media (max-width: 640px) {
    padding: 0.625rem;
  }
`;

export const ChatLabel = styled.h4`
  color: ${textColor};
  font-weight: 500;
  margin-bottom: 0.625rem;
  z-index: 10;
  position: relative;
`;
