/*
 *
 * BotContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectBotContainer from './selectors';
import { initConversation, estimateRecommendation, activateBot } from './actions';
import BotComponent from '../../components/BotComponent/';

export class BotContainer extends React.Component { // eslint-disable-line react/prefer-dataless-function
  componentDidMount() {
    this.handleInitConversation();
  }

  componentDidUpdate() {
    if (this.props.botContainer.displayRecommendation) {
      this.handleEstimateRecommendation(this.props.botContainer.bags);
    }
  }

  handleActivateBot() {
    this.props.activateBot();
  }
  handleEstimateRecommendation(bags) {
    this.props.estimateRecommendation(bags);
  }
  handleInitConversation() {
    this.props.initConversation();
  }

  render() {
    const data = this.props.botContainer;
    return (
      <div>
        <Helmet
          title="Alpha"
          meta={[
            { name: 'description', content: 'Description of BotContainer' },
          ]}
        />
        <BotComponent
          name="Alpha"
          conversation={data.conversation}
          active={data.active}
          expanded={data.expanded}
          activateBot={this.handleActivateBot.bind(this)}
          userName={data.userName}
          companyName={data.companyName}
          botThinking={data.botThinking}
        />
      </div>
    );
  }
}

BotContainer.propTypes = {
  botContainer: PropTypes.object.isRequired,
  activateBot: PropTypes.func.isRequired,
  estimateRecommendation: PropTypes.func.isRequired,
  initConversation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => createStructuredSelector({
  botContainer: makeSelectBotContainer(state),
});

function mapDispatchToProps(dispatch) {
  return {
    activateBot: () => dispatch(activateBot()),
    estimateRecommendation: (bags) => dispatch(estimateRecommendation(bags)),
    initConversation: () => dispatch(initConversation()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BotContainer);
