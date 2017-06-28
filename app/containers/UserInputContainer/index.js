/*
 *
 * UserInputContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUserInputContainer from './selectors';
import UserInput from '../../components/UserInput/'
import { enableSubmit, disableSubmit, restartConversation, sendMessageFromUser, resetCurrentInput } from './actions'

export class UserInputContainer extends React.Component { // eslint-disable-line react/prefer-dataless-function
    _handleSubmit(text, currentBotBubble) {
      this.props._sendUserMessage(text, currentBotBubble);
    }
    render() {
      let data = this.props.UserInputContainer
      return (
        <UserInput inputType = {data.currentInput}
          currentBotBubble = {data.currentBotBubble}
          sendUserMessage = {this._handleSubmit.bind(this)}
          restartConversation = {this.props._restartConversation.bind(this)}
          enableSubmit = {this.props._enableSubmit.bind(this)}
          disableSubmit = {this.props._disableSubmit.bind(this)}
          userName={data.userName}
          canSubmit={data.canSubmit}/>
      )
    }
}

UserInputContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  UserInputContainer: makeSelectUserInputContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    _sendUserMessage: (text, currentBotBubble) => {
      dispatch(sendMessageFromUser(text,currentBotBubble));
      dispatch(resetCurrentInput());
    },
    _enableSubmit: () => {dispatch(enableSubmit())},
    _disableSubmit: () => {dispatch(disableSubmit())},
    _restartConversation: () => {dispatch(restartConversation())},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputContainer);
