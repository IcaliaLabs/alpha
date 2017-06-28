/**
*
* DialogueFromUser
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';


class DialogueFromUser extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let bubbles = this._getBubbles();
    return (
      <div className="qt-chat__dialogue from-user">
        <div className="qt-chat__bubbles">
          {bubbles}
        </div>
        <div className="qt-avatar is-user">
          <span>{this.props.userName[0]}</span>
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
        case 'link':
          return this._linkBubble(bubble, index);
        case 'media':
          return this._mediaBubble(bubble, index);
        case 'array':
          return this._arrayBubble(bubble, index);
        default:
          return this._textBubble(bubble, index);
      }
    })
  }

  _textBubble(bubble, keyIndex){
    return (
      <article key={keyIndex} className="qt-chat__bubble">
        <div>
          <p>{bubble.content}</p>
        </div>
      </article>
    )
  }

  _arrayBubble(bubble, keyIndex){
    return (
      <article key={keyIndex} className="qt-chat__bubble">
        <div>
          <p>{bubble.content.join(", ")}</p>
        </div>
      </article>
    )
  }

  _linkBubble(bubble, keyIndex){
    return (
      <article  key={keyIndex} className="qt-chat__bubble is-link">
        <div>
          <a href={bubble.content}>
            <h3 className="qt-chat__specialText ">{bubble.title}</h3>
            <p>{bubble.description}</p>
            <span className="qt-chat__specialText">{bubble.content}</span>
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

DialogueFromUser.propTypes = {
  dialogue: PropTypes.object,	
  userName: PropTypes.string
};

export default DialogueFromUser;
