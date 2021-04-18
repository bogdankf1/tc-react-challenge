export const createActions = (actionType) => {
  return {
    REQUEST: `${actionType}_REQUEST`,
    SUCCESS: `${actionType}_SUCCESS`,
    FAILED: `${actionType}_FAILED`,
  };
};
