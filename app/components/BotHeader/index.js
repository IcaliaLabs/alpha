/**
*
* BotHeader
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import { Header, BotName } from './styledComponents';

class BotHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      return (
        <Header>
          <span />
          <BotName isOnline={this.props.active}> { this.props.name }</BotName>
          <span/>
        </Header>
      )
    }
}

BotHeader.propTypes = {
	name: PropTypes.string.isRequired,
	deactivateBot: PropTypes.func.isRequired,
	toggleExpandedBot: PropTypes.func.isRequired,
};

export default BotHeader;
