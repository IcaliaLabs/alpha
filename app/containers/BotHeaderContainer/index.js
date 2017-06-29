/*
 *
 * BotHeaderContainer
 *
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectBotHeaderContainer from './selectors';
import { deactivateBot, toggleExpandedBot } from './actions';
import BotHeader from '../../components/BotHeader/';

const BotHeaderContainer = ({ botHeaderContainer, handleDeactivateBot, handleToggleExpandedBot }) => { // eslint-disable-line react/prefer-dataless-function
  const data = botHeaderContainer;
  return (
    <BotHeader
      name={data.botName}
      active={data.active}
      deactivateBot={handleDeactivateBot}
      toggleExpandedBot={handleToggleExpandedBot}
    />
  );
};

BotHeaderContainer.propTypes = {
  botHeaderContainer: PropTypes.object.isRequired,
  handleDeactivateBot: PropTypes.func.isRequired,
  handleToggleExpandedBot: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  botHeaderContainer: makeSelectBotHeaderContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleDeactivateBot: () => { dispatch(deactivateBot()); },
    handleToggleExpandedBot: () => { dispatch(toggleExpandedBot()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BotHeaderContainer);
