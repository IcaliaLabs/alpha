/**
*
* UserInput
*
*/

// import styled from 'styled-components';

import React, { PropTypes } from 'react';

class UserInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static PropTypes = {
      inputType: PropTypes.object.isRequired,
      userName: PropTypes.string.isRequired,
      sendUserMessage: PropTypes.func.isRequired
    }

    constructor(props) {
      super(props)
      this.tags = []
    }

    componentDidUpdate(prevProps, prevState){
       if (this.text_input) {
        this.text_input.focus();
       }
    }

    render() {
      let inputType = this._getInputType()
      let label = this._getLabel()
      return (
        <section className="qt-chat__userOptions" >

          {label}
          {inputType}

          

        </section>
      )
    }

    _sendUserMessage(text){
      if( (Array.isArray(text) && text.length > 0 ) || text != ""){
        this.props.sendUserMessage(text, this.props.currentBotBubble)
      }
    }

    _getLabel(){
      if (this.props.inputType.label) {
        return <h4 className="qt-chat__label">{this.props.inputType.label}</h4>
      }

      return ""
    }


    _getInputType(){
      let inputType = this.props.inputType

      switch (inputType.type) {
        case "optionCards": {
          return this._getOptionCards(inputType);
        }
        case "fieldText": {
          return this._getFieldText(inputType);
        }
        case "select": {
          return this._getSelect(inputType);
        }
        case "tags": {
          return this._getTags(inputType);
        }
        case "disabledFieldText": {
          return this._getDisabledFieldText(inputType);
        }
        case "endOfConversation": {
          return this._getEndOfConversation(inputType);
        }
        default: {
          console.log("Non recognizable input type")
        }
      }
    }

    _getOptionCards(inputType) {
      const optionsCards = inputType.optionCards
      return optionsCards.map( (optionCard, index) => {
        return (
          <article key={index} className="qt-chat__optionCard" onClick={this._sendUserMessage.bind(this, optionCard.title)} >
            <div>
              <h3 className="qt-chat__optionCardTitle">{optionCard.title}</h3>
            </div>
            <div>
              <p>{optionCard.description}</p>
            </div>
            <div>
              <a href="#" className="qt-chat__optionCardLink">Select This</a>
            </div>
          </article>
        )
      })
    }

    _getFieldText(inputType) {
      return (
        <article className="qt-chat__field">
          <input ref={(input) => this.text_input = input }
            className="qt-chat__input"
            type="text"
            placeholder={inputType.placeholder}
            onKeyPress={this._handleKeyPress.bind(this)}
            onKeyUp={this._toggleSubmit.bind(this)}
            autoFocus
            />
          {this._getSubmitButton()}
          {this._getSubmitButtonSmall()}
        </article>
      )
    }

    _restartConvo() {
      this.props.restartConversation();
    }

    _getDisabledFieldText(inputType) {
      return (
        <article className="qt-chat__field">
          <input ref={(input) => this.text_input = input }
            className="qt-chat__input"
            type="text"
            placeholder={inputType.placeholder}
            disabled={true}
            />

          <button className="qt-chat__submit"
            type="button"
            disabled >
            Submit
          </button>
          <button className="qt-chat__submitSmall"
            type="button"
            disabled>
          </button>
        </article>
      )
    }

    _getEndOfConversation(inputType) {
      return (
        <article className="qt-chat__field">
          <input ref={(input) => this.text_input = input }
            className="qt-chat__input"
            type="text"
            placeholder={inputType.placeholder}
            disabled
            />

          <button className="qt-chat__refresh"
            type="button"
            onClick={this._restartConvo.bind(this)}>
            Restart
          </button>
          <button className="qt-chat__refreshSmall"
            type="button"
            onClick={this._restartConvo.bind(this)}>
          </button>
        </article>
      )
    }

    _getSelect(inputType) {
      const options = inputType.options.map( ( option, index ) => {
          return <a key = { index }
                    className="qt-chat__reply"
                    onClick={(e) => this._sendUserMessage(option.label) }> {option.label} </a>
      })
      return (
        <article className="qt-chat__field">
          <div>
            { options }
          </div>
        </article>
      )
    }

    _getTags(inputType) {
      this.tags = []
      return (
        <article className="qt-chat__field">
          <div className="qt-chat__tagsContainer" >
            <article className="qt-chat__tags" style={{width: (230*this.props.inputType.tags.length)+"px"}}>
              {inputType.tags.map( (tag, index) => {
                return (
                  <div key={index} className="qt-chat__tag" >
                    <input type="checkbox"
                           value = {tag.value}
                           onKeyPress= {this._handleKeyPress.bind(this)}
                           onClick={this._toggleSubmit.bind(this)}
                           ref={(checkbox) => this.tags.push(checkbox) } /> <label> { tag.label } </label>
                  </div>
                )
              })}
              {this._getSubmitButton()}
            </article>
          </div>
          {this._getSubmitButtonSmall()}
        </article>
      )
    }

    _getSubmitButton(){
      return(
        <button className={"qt-chat__submit"+(this.props.canSubmit ? " submitEnabled" : " submitDisabled")}
          type="button"
          onClick={this._handleSubmit.bind(this)}
          disabled={!this.props.canSubmit}>
            Submit
        </button>
      )
    }

    _getSubmitButtonSmall(){
      return(
        <button className={"qt-chat__submitSmall"+((this.props.inputType.type == "tags") ? " for-tags" : "")}
          type="button"
          onClick={this._handleSubmit.bind(this)}
          disabled={!this.props.canSubmit}>
        </button>
      )
    }

    _submitTextField() {
      this.props.sendUserMessage(this.text_input.value);
      this.text_input.value="";
    }

    _sendTags(){
      const checked_tags = this.tags.filter( tag => (tag && tag.checked))

      if(checked_tags.length > 0){
        let userMessage = checked_tags.map(tag => tag.value)
        this._sendUserMessage(userMessage)
      }
    }

    _handleSubmit(){
      switch (this.props.inputType.type) {
        case "tags":
          this._sendTags()
          this.props.disableSubmit()
          break;
        case "fieldText":
          this._submitTextField()
          this.props.disableSubmit()
          break;
        default:
          console.log("Unhandled InputType!")
          break;
      }
    }

    _handleKeyPress(e) {
      let inputType = this.props.inputType
      if (e.key === 'Enter') {
        let userMessage = ""
        switch (inputType.type) {
          case "optionCards": {
            return this._getOptionCards(inputType);
          }
          case "fieldText": {
            userMessage = this.text_input.value
            this.text_input.value = ""
            this.props.disableSubmit()
            break;
          }
          case "select": {
            userMessage = this.select_input.value
            break;
          }
          case "tags": {
            const checked_tags = this.tags.filter( tag => tag && tag.checked)
            userMessage = checked_tags.map(tag => tag.value)
            break;
          }
          default: {
            console.log("Non recognizable input type")
          }
        }
        this._sendUserMessage(userMessage)
      } 
    }

    _toggleSubmit() {
      let inputType = this.props.inputType
      switch (inputType.type) {
        case "fieldText": {
          if (this.text_input.value.length > 0) {
            this.props.enableSubmit()
          } else {
            this.props.disableSubmit()
          }
          break;
        }
        case "tags": {
          var checked_tags = this.tags.filter( tag => (tag && tag.checked))
          if (checked_tags.length > 0){
            this.props.enableSubmit()
          } else {
            this.props.disableSubmit()
          }
          break;
        }
        default: {
          console.log("Non recognizable input type")
        }
      }
    }
}

export default UserInput;
