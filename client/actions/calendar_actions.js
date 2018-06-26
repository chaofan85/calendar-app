export const SWITCH_MONTH = 'SWITCH_MONTH';

const switchMonth = ({ year, month }) => {
  return {
    type: SWITCH_MONTH,
    data: { year, month }
  };
};

export const changeMonth = (year, month) => dispatch => {
  return dispatch(switchMonth({ year, month }));
};
