/*
*
* Conversation
*
*/

import React, { PropTypes } from 'react';
import DialogueFromBot from '../DialogueFromBot/';
import DialogueFromUser from '../DialogueFromUser/';
import {
  ConversationWrapper,
} from './styledComponents';
// import styled from 'styled-components';


class Conversation extends React.Component {// eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    setTimeout(() => { this.scrollToBottom(); }, 100);
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth', alignToTop: true });
  }

  handlegetBubbleThinking() {
    return (
      <div className="qt-chat__dialogue from-bot">
        <div className="qt-avatar"></div>
        <div className="qt-chat__bubbles">
          <article className="qt-chat__bubble">
            <div>
              <span className="qt-thinking"></span>
            </div>
          </article>
        </div>
      </div>
    );
  }
  handlegetDialogues() {
    const conversation = this.props.conversation;

    return conversation.map((dialogue) => {
      if (dialogue.from === 'bot') {
        return (<DialogueFromBot
          key={dialogue.id}
          dialogue={dialogue}
          companyName={this.props.companyName}
          userName={this.props.userName}
        />);
      } else if (dialogue.from === 'user') {
        return (<DialogueFromUser
          key={dialogue.id}
          dialogue={dialogue}
          companyName={this.props.companyName}
          userName={this.props.userName}
        />);
      }
      return null;
    });
  }

  render() {
    const dialogues = this.handlegetDialogues();
    let bubbleThinking;
    if (this.props.botThinking) {
      bubbleThinking = this.handlegetBubbleThinking();
    }
    return (
      <ConversationWrapper innerRef={(div) => (this.wrapper = div)}>
        {dialogues}
        {bubbleThinking}

        <div ref={(el) => { this.messagesEnd = el; }}></div>
      </ConversationWrapper>
    );
  }
}

Conversation.propTypes = {
  conversation: PropTypes.array.isRequired,
  userName: PropTypes.string,
  companyName: PropTypes.string,
  botThinking: PropTypes.bool,
};

Conversation.defaultProps = {
  userName: '',
  companyName: '',
  botThinking: false,
};

export default Conversation;
