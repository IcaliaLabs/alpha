/*
 *
 * UserInputContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUserInputContainer from './selectors';
import UserInput from '../../components/UserInput/';
import { enableSubmit, disableSubmit, restartConversation, sendMessageFromUser, resetCurrentInput } from './actions';

export class UserInputContainer extends React.Component { // eslint-disable-line react/prefer-dataless-function
  handleSubmit(text, currentBotBubble) {
    this.props.sendUserMessage(text, currentBotBubble);
  }
  render() {
    const data = this.props.UserInputContainer;
    return (
      <UserInput
        inputType={data.currentInput}
        currentBotBubble={data.currentBotBubble}
        sendUserMessage={this.handleSubmit.bind(this)}
        restartConversation={this.props.restartConversation.bind(this)}
        enableSubmit={this.props.enableSubmit.bind(this)}
        disableSubmit={this.props.disableSubmit.bind(this)}
        userName={data.userName}
        canSubmit={data.canSubmit}
      />
    );
  }
}

UserInputContainer.propTypes = {
  sendUserMessage: PropTypes.func.isRequired,
  enableSubmit: PropTypes.func.isRequired,
  disableSubmit: PropTypes.func.isRequired,
  restartConversation: PropTypes.func.isRequired,
  UserInputContainer: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  UserInputContainer: makeSelectUserInputContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendUserMessage: (text, currentBotBubble) => {
      dispatch(sendMessageFromUser(text, currentBotBubble));
      dispatch(resetCurrentInput());
    },
    enableSubmit: () => { dispatch(enableSubmit()); },
    disableSubmit: () => { dispatch(disableSubmit()); },
    restartConversation: () => { dispatch(restartConversation()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputContainer);
