/**
*
* BotComponent
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import BotHeaderContainer from '../../containers/BotHeaderContainer/';
import UserInputContainer from '../../containers/UserInputContainer/';
import Conversation from '../Conversation'

function BotComponent(props) {
  let activeClassName = "";
  if (props.active) {
    activeClassName = "is-active"
  }

  let sizeClass = "is-large"
  if (props.expanded) {
    sizeClass = "is-mini"
  }

  return (
    <section className={ "qt-frame " + activeClassName }>
      <section className={ "qt-chat " + sizeClass + " " + activeClassName }>

        <BotHeaderContainer />
        <Conversation conversation = {props.conversation}
                      userName = {props.userName}
                      companyName = {props.companyName}
                      botThinking = {props.botThinking}/>
        <UserInputContainer/>

      </section>

    </section>
  );
}

BotComponent.propTypes = {
	active: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	conversation: PropTypes.array.isRequired,
	activateBot: PropTypes.func.isRequired,
	userName: PropTypes.string,
	botThinking: PropTypes.bool,
};

export default BotComponent;
