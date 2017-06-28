/**
*
* BotHeader
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import { ExpandSvg } from './ExpandSvg'


class BotHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      return (
        <header className="qt-chat__header">
          <span />
          <h2 className={"qt-chat__nameBot" + (this.props.active ? " is-online" : "")}> { this.props.name }</h2>
          <a className="qt-chat__controlWindow is-fullscreen" href="javascript::;" onClick={this.props.toggleExpandedBot}>
            {/*<ExpandSvg/>*/}
          </a>
        </header>
      )
    }
}

BotHeader.propTypes = {
	name: PropTypes.string.isRequired,
	deactivateBot: PropTypes.func.isRequired,
	toggleExpandedBot: PropTypes.func.isRequired,
};

export default BotHeader;
