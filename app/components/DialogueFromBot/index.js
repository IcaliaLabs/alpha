/*
*
* DialogueFromBot
*
*/

import React, { PropTypes } from 'react';
import Parser from 'html-react-parser';
// import styled from 'styled-components';


class DialogueFromBot extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getBubbles() {
    const bubbles = this.props.dialogue.bubbles;

    return bubbles.map((bubble, index) => {
      switch (bubble.type) {
        case 'text':
          return this.textBubble(bubble, index);
        case 'transformedText':
          return this.transformedTextBubble(bubble, index);
        case 'link':
          return this.linkBubble(bubble, index);
        case 'media':
          return this.mediaBubble(bubble, index);
        default:
          return this.textBubble(bubble, index);
      }
    });
  }

  textBubble(bubble, keyIndex) {
    return (
      <article key={keyIndex} className="qt-chat__bubble">
        <div>
          <p>{Parser(bubble.content)}</p>
        </div>
      </article>
    );
  }

  transformedTextBubble(bubble, keyIndex) {
    return (
      <article key={keyIndex} className="qt-chat__bubble">
        <div>
          <p>{Parser(bubble.content.replace('@varName', this.props[bubble.varName]))}</p>
        </div>
      </article>
    );
  }

  linkBubble(bubble, keyIndex) {
    return (
      <article key={keyIndex} className="qt-chat__bubble is-link">
        <div>
          <a href={bubble.content} target="_blank">
            <h3 className="qt-chat__specialText ">{bubble.title}</h3>
            <p>{bubble.description}</p>
            <span className="qt-chat__specialText">
              {Parser(bubble.content)}
            </span>
          </a>
        </div>
      </article>
    );
  }

  mediaBubble(bubble, keyIndex) {
    return (
      <article key={keyIndex} className="qt-chat__media">
        <img src={bubble.content} alt="fun" />
      </article>
    );
  }

  render() {
    const bubbles = this.getBubbles();
    return (
      <div className="qt-chat__dialogue from-bot">
        <div className="qt-avatar"></div>
        <div className="qt-chat__bubbles">
          {bubbles}
        </div>
      </div>

    );
  }
}

DialogueFromBot.propTypes = {
  dialogue: PropTypes.object,
};

DialogueFromBot.defaultProps = {
  dialogue: {},
};

export default DialogueFromBot;
