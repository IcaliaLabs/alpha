/**
*
* DialogueFromBot
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


class DialogueFromBot extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      let bubbles = this._getBubbles();
      return (
        <div className="qt-chat__dialogue from-bot">
          <div className="qt-avatar"></div>
          <div className="qt-chat__bubbles">
            {bubbles}
          </div>
        </div>

      )
    }

    _getBubbles(){
      let bubbles = this.props.dialogue.bubbles

      return bubbles.map((bubble, index) => {
        switch (bubble.type){
          case 'text':
            return this._textBubble(bubble, index);
          case 'transformedText':
            return this._transformedTextBubble(bubble, index);
          case 'link':
            return this._linkBubble(bubble, index);
          case 'media':
            return this._mediaBubble(bubble, index);
          default:
            return this._textBubble(bubble, index);
        }
      })
    }

    _textBubble(bubble, keyIndex){
      return (
        <article key={keyIndex} className="qt-chat__bubble">
          <div>
              <p dangerouslySetInnerHTML={{__html: bubble.content}}></p>
          </div>
        </article>
      )
    }

    _transformedTextBubble(bubble, keyIndex){
        return (
        <article key={keyIndex} className="qt-chat__bubble">
          <div>
                <p dangerouslySetInnerHTML={{__html: bubble.content.replace("@varName", this.props[bubble.varName])}}></p>
          </div>
        </article>
      )
    }

    _linkBubble(bubble, keyIndex){
      return (
        <article  key={keyIndex} className="qt-chat__bubble is-link">
          <div>
            <a href={bubble.content} target="_blank">
              <h3 className="qt-chat__specialText ">{bubble.title}</h3>
              <p>{bubble.description}</p>
              <span className="qt-chat__specialText" dangerouslySetInnerHTML={{__html: bubble.content}}></span>
            </a>
          </div>
        </article>
      )
    }

    _mediaBubble(bubble, keyIndex){
      return (
        <article  key={keyIndex} className="qt-chat__media">
          <img src={bubble.content}/>
        </article>
      )
    }
}

DialogueFromBot.propTypes = {
  dialogue: PropTypes.object
};

export default DialogueFromBot;
