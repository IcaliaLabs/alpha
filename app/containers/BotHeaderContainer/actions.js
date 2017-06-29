  import * as C from './constants';

  export const activateBot = () => ({
    type: C.ACTIVATE_BOT,
  });

  export const toggleExpandedBot = () => ({
    type: C.TOGGLE_EXPANDED_BOT,
  });

  export const deactivateBot = () => ({
    type: C.DEACTIVATE_BOT,
  });

