/**
*
* UserInput
*
*/

// import styled from 'styled-components';
import React, { PropTypes } from 'react';
import {
  SubmitButton,
  SubmitButtonSmall,
  UserOptions,
  ChatLabel,
} from './styledComponents';

class UserInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.tags = [];
  }

  componentDidUpdate() {
    if (this.texthandleinput) {
      this.texthandleinput.focus();
    }
  }

  handlesendUserMessage(text) {
    if ((Array.isArray(text) && text.length > 0) || text !== '') {
      this.props.sendUserMessage(text, this.props.currentBotBubble);
    }
  }

  handlegetLabel() {
    if (this.props.inputType.label) {
      return <ChatLabel>{this.props.inputType.label}</ChatLabel>;
    }
    return '';
  }

  handlegetInputType() {
    const inputType = this.props.inputType;

    switch (inputType.type) {
      case 'fieldText': {
        return this.handlegetFieldText(inputType);
      }
      case 'select': {
        return this.handlegetSelect(inputType);
      }
      case 'tags': {
        return this.handlegetTags(inputType);
      }
      case 'disabledFieldText': {
        return this.handlegetDisabledFieldText(inputType);
      }
      case 'endOfConversation': {
        return this.handlegetEndOfConversation(inputType);
      }
      default:
    }
    return null;
  }

  handlegetFieldText(inputType) {
    return (
      <article className="qt-chat__field">
        <input
          ref={(input) => (this.texthandleinput = input)}
          className="qt-chat__input"
          type="text"
          placeholder={inputType.placeholder}
          onKeyPress={this.handlehandleKeyPress.bind(this)}
          onKeyUp={this.handletoggleSubmit.bind(this)}
          autoFocus
        />
        {this.handlegetSubmitButton()}
        {this.handlegetSubmitButtonSmall()}
      </article>
    );
  }

  handlerestartConvo() {
    this.props.restartConversation();
  }

  handlegetDisabledFieldText(inputType) {
    return (
      <article className="qt-chat__field">
        <input
          ref={(input) => (this.texthandleinput = input)}
          className="qt-chat__input"
          type="text"
          placeholder={inputType.placeholder}
          disabled
        />

        <SubmitButton
          disabled
        >
            Submit
          </SubmitButton>
        <SubmitButtonSmall disabled />
      </article>
    );
  }

  handlegetEndOfConversation(inputType) {
    return (
      <article className="qt-chat__field">
        <input
          ref={(input) => (this.texthandleinput = input)}
          className="qt-chat__input"
          type="text"
          placeholder={inputType.placeholder}
          disabled
        />

        <SubmitButton
          refresh
          type="button"
          onClick={this.handlerestartConvo.bind(this)}
        >
            Restart
          </SubmitButton>
        <SubmitButtonSmall
          refresh
          type="button"
          onClick={this.handlerestartConvo.bind(this)}
        >
        </SubmitButtonSmall>
      </article>
    );
  }

  handlegetSelect(inputType) {
    const options = inputType.options.map((option) => (<a
      tabIndex={0}
      role="button"
      key={option.label.replace(/\W/gi, '').toLowerCase()}
      className="qt-chat__reply"
      onClick={() => this.handlesendUserMessage(option.label)}
    > {option.label} </a>));
    return (
      <article className="qt-chat__field">
        <div>
          { options }
        </div>
      </article>
    );
  }

  handlegetTags(inputType) {
    this.tags = [];
    return (
      <article className="qt-chat__field">
        <div className="qt-chat__tagsContainer" >
          <article className="qt-chat__tags" style={{ width: `${230 * this.props.inputType.tags.length}px` }}>
            {inputType.tags.map((tag) => (
              <div key={tag.label.replace(/\W/gi, '').toLowerCase()} className="qt-chat__tag" >
                <input
                  type="checkbox"
                  value={tag.value}
                  onKeyPress={this.handlehandleKeyPress.bind(this)}
                  onClick={this.handletoggleSubmit.bind(this)}
                  ref={(checkbox) => this.tags.push(checkbox)}
                /> <label htmlFor={tag}> { tag.label } </label>
              </div>
                ))}
            {this.handlegetSubmitButton()}
          </article>
        </div>
        {this.handlegetSubmitButtonSmall()}
      </article>
    );
  }

  handlegetSubmitButton() {
    return (
      <SubmitButton
        hasTags={this.props.inputType.type === 'tags'}
        type="button"
        onClick={this.handlehandleSubmit.bind(this)}
        disabled={!this.props.canSubmit}
      >
            Submit
        </SubmitButton>
    );
  }

  handlegetSubmitButtonSmall() {
    return (
      <SubmitButtonSmall
        hasTags={this.props.inputType.type === 'tags'}
        type="button"
        onClick={this.handlehandleSubmit.bind(this)}
        disabled={!this.props.canSubmit}
      />
    );
  }

  handlesubmitTextField() {
    // this.props.sendUserMessage(this.texthandleinput.value);
    let userMessage = '';
    userMessage = this.texthandleinput.value;
    this.texthandleinput.value = '';
    this.handlesendUserMessage(userMessage);
  }

  handlesendTags() {
    const checkedhandletags = this.tags.filter((tag) => (tag && tag.checked));

    if (checkedhandletags.length > 0) {
      const userMessage = checkedhandletags.map((tag) => tag.value);
      this.handlesendUserMessage(userMessage);
    }
  }

  handlehandleSubmit() {
    switch (this.props.inputType.type) {
      case 'tags':
        this.handlesendTags();
        this.props.disableSubmit();
        break;
      case 'fieldText':
        this.handlesubmitTextField();
        this.props.disableSubmit();
        break;
      default:
        break;
    }
  }

  handlehandleKeyPress(e) {
    const inputType = this.props.inputType;
    if (e.key === 'Enter') {
      let userMessage = '';
      switch (inputType.type) {
        case 'optionCards': {
          return this.handlegetOptionCards(inputType);
        }
        case 'fieldText': {
          userMessage = this.texthandleinput.value;
          this.texthandleinput.value = '';
          this.props.disableSubmit();
          break;
        }
        case 'select': {
          userMessage = this.selecthandleinput.value;
          break;
        }
        case 'tags': {
          const checkedhandletags = this.tags.filter((tag) => tag && tag.checked);
          userMessage = checkedhandletags.map((tag) => tag.value);
          break;
        }
        default:
      }
      this.handlesendUserMessage(userMessage);
    }
    return null;
  }

  handletoggleSubmit() {
    const inputType = this.props.inputType;
    switch (inputType.type) {
      case 'fieldText': {
        if (this.texthandleinput.value.length > 0) {
          this.props.enableSubmit();
        } else {
          this.props.disableSubmit();
        }
        break;
      }
      case 'tags': {
        const checkedhandletags = this.tags.filter((tag) => (tag && tag.checked));
        if (checkedhandletags.length > 0) {
          this.props.enableSubmit();
        } else {
          this.props.disableSubmit();
        }
        break;
      }
      default:
    }
  }
  render() {
    const inputType = this.handlegetInputType();
    const label = this.handlegetLabel();
    return (
      <UserOptions>
        {label}
        {inputType}
      </UserOptions>
    );
  }
}

UserInput.propTypes = {
  restartConversation: PropTypes.func.isRequired,
  sendUserMessage: PropTypes.func.isRequired,
  enableSubmit: PropTypes.func.isRequired,
  disableSubmit: PropTypes.func.isRequired,
  inputType: PropTypes.object.isRequired,
  canSubmit: PropTypes.bool.isRequired,
  currentBotBubble: PropTypes.string.isRequired,
};

export default UserInput;
