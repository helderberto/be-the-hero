import { useReducer } from 'react';
import { mergeObject } from 'utils';

const Types = {
  UPDATE: 'useForm/update',
  RESET: 'useForm/reset',
};

function reducer(state, action) {
  switch (action.type) {
    case Types.UPDATE: {
      return mergeObject(state, { [action.name]: action.value });
    }

    case Types.RESET: {
      return action.initialState;
    }

    default: {
      throw Error('🚫 Required initial state to start the useForm hook.');
    }
  }
}

function useForm(initialState = {}) {
  const [values, dispatch] = useReducer(reducer, initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;

    return dispatch({
      type: Types.UPDATE,
      name,
      value,
    });
  }

  function resetForm() {
    return dispatch({
      type: Types.RESET,
      initialState,
    });
  }

  return {
    values,
    handleChange,
    resetForm,
  };
}

export { useForm };
