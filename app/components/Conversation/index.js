/**
*
* Conversation
*
*/

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import DialogueFromBot from '../DialogueFromBot/'
import DialogueFromUser from '../DialogueFromUser/'
// import styled from 'styled-components';


class Conversation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let dialogues = this._getDialogues()
    let bubbleThinking
    if(this.props.botThinking){
      bubbleThinking = this._getBubbleThinking()
    }
    return (
      <section className="qt-chat__conversation">
        {dialogues}
        {bubbleThinking}

        <div ref={(el) => { this.messagesEnd = el; }}></div>
      </section>
    )
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  _getBubbleThinking(){
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
    )
  }
  _getDialogues(){
    const conversation = this.props.conversation

    return conversation.map((dialogue) => {
      if(dialogue.from == "bot"){
        return <DialogueFromBot 
        key={dialogue.id} 
        dialogue={dialogue}
        companyName={this.props.companyName} 
        userName={this.props.userName} />
      }
      else if(dialogue.from == "user"){
        return <DialogueFromUser 
        key={dialogue.id} 
        dialogue={dialogue}
        companyName={this.props.companyName} 
        userName={this.props.userName} />
      }
    })
  }
}

Conversation.propTypes = {
	conversation: PropTypes.array.isRequired,
  userName: PropTypes.string,
  botThinking: PropTypes.bool
};

export default Conversation;
