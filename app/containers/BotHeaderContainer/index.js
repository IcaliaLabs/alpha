/*
 *
 * BotHeaderContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectBotHeaderContainer from './selectors';
import { deactivateBot, toggleExpandedBot } from './actions'
import BotHeader from '../../components/BotHeader/'
export class BotHeaderContainer extends React.Component { // eslint-disable-line react/prefer-dataless-function

  render() {
    let data = this.props.BotHeaderContainer
    return (
      <BotHeader name={data.botName}
        active={data.active}
        deactivateBot = {this.props._deactivateBot.bind(this)}
        toggleExpandedBot = {this.props._toggleExpandedBot.bind(this)}/>
    )
  }
}

BotHeaderContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  BotHeaderContainer: makeSelectBotHeaderContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    _deactivateBot: () => {dispatch(deactivateBot())},
    _toggleExpandedBot: () => {dispatch(toggleExpandedBot())},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BotHeaderContainer);
