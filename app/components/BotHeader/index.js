/**
*
* BotHeader
*
*/

import React, { PropTypes } from 'react';
import { Header, BotName } from './styledComponents';

const BotHeader = ({ active, name }) => { // eslint-disable-line react/prefer-stateless-function
  return (
    <Header>
      <span />
      <BotName isOnline={active}> {name}</BotName>
      <span />
    </Header>
  );
};

BotHeader.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default BotHeader;
