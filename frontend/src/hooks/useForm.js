import { useReducer } from 'react';
import { mergeObject } from 'utils';

function useForm(initialState = {}) {
  const [values, setValue] = useReducer(
    (state, newState) => mergeObject(state, newState),
    initialState
  );

  return [values, setValue];
}

export default useForm;
