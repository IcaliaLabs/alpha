/**
*
* DialogueFromUser
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


class DialogueFromUser extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getBubbles() {
    const bubbles = this.props.dialogue.bubbles;

    return bubbles.map((bubble, index) => {
      switch (bubble.type) {
        case 'text':
          return this.textBubble(bubble, index);
        case 'link':
          return this.linkBubble(bubble, index);
        case 'media':
          return this.mediaBubble(bubble, index);
        case 'array':
          return this.arrayBubble(bubble, index);
        default:
          return this.textBubble(bubble, index);
      }
    });
  }

  textBubble(bubble, keyIndex) {
    return (
      <article key={keyIndex} className="qt-chat__bubble">
        <div>
          <p>{bubble.content}</p>
        </div>
      </article>
    );
  }

  arrayBubble(bubble, keyIndex) {
    return (
      <article key={keyIndex} className="qt-chat__bubble">
        <div>
          <p>{bubble.content.join(', ')}</p>
        </div>
      </article>
    );
  }

  linkBubble(bubble, keyIndex) {
    return (
      <article key={keyIndex} className="qt-chat__bubble is-link">
        <div>
          <a href={bubble.content}>
            <h3 className="qt-chat__specialText ">{bubble.title}</h3>
            <p>{bubble.description}</p>
            <span className="qt-chat__specialText">{bubble.content}</span>
          </a>
        </div>
      </article>
    );
  }

  mediaBubble(bubble, keyIndex) {
    return (
      <article key={keyIndex} className="qt-chat__media">
        <img src={bubble.content} alt="" />
      </article>
    );
  }

  render() {
    const bubbles = this.getBubbles();
    return (
      <div className="qt-chat__dialogue from-user">
        <div className="qt-chat__bubbles">
          {bubbles}
        </div>
        <div className="qt-avatar is-user">
          <span>{this.props.userName[0]}</span>
        </div>
      </div>
    );
  }

}

DialogueFromUser.propTypes = {
  dialogue: PropTypes.object,
  userName: PropTypes.string,
};

DialogueFromUser.defaultProps = {
  dialogue: {},
  userName: '',
};

export default DialogueFromUser;
