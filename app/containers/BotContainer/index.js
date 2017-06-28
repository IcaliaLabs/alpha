/*
 *
 * BotContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectBotContainer from './selectors';
import { initConversation, estimateRecommendation, activateBot } from './actions'
import BotComponent from '../../components/BotComponent/'

export class BotContainer extends React.Component { // eslint-disable-line react/prefer-dataless-function
  componentDidMount() {
    this._initConversation()
  }

  componentWillUnmount(){
  }

  componentDidUpdate(){
    if(this.props.botContainer.displayRecommendation){
      this._estimateRecommendation(this.props.botContainer.bags)
    }
  }
    // if(data.mailRecommendation){
    //   this.store.dispatch(actions.sendMailRecommendation(data.userName, data.bags, data.userEmail))
    // }

    // if(data.sendMailToOwnerWithSummary){
    //   let userName = data.userName || "No name Given"
    //   let userEmail = data.userEmail || "No email Given"
    //   let userPhone = data.userPhone || "No phone Given"
    //   this.store.dispatch(actions.sendMailToOwner(data.userName, data.userEmail, data.userPhone, data.conversation))
    // }

  _activateBot (){
    this.props.activateBot()
  }
  _estimateRecommendation (bags){
    this.props.estimateRecommendation(bags)
  }
  _initConversation (){
    this.props.initConversation()
  }

  render() {
    let data = this.props.botContainer
    return (
      <div>
        <Helmet
          title="Alpha"
          meta={[
            { name: 'description', content: 'Description of BotContainer' },
          ]}
        />
        <BotComponent name = "Alpha"
                         conversation = {data.conversation}
                         active={data.active}
                         expanded={data.expanded}
                         activateBot={this._activateBot.bind(this)}
                         userName = {data.userName}
                         companyName = {data.companyName}
                         botThinking = {data.botThinking}/>
      </div>
    );
  }
}



BotContainer.propTypes = {
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
