import { useReducer } from 'react';
import { mergeObject } from 'utils';

function useForm(initialState = {}) {
  const [values, setValues] = useReducer(
    (state, newState) => mergeObject(state, newState),
    initialState
  );

  function handleChange(evt) {
    const { name, value } = evt.target;

    setValues({ [name]: value });
  }

  function resetForm() {
    setValues(initialState);
  }

  return [values, resetForm, handleChange];
}

export { useForm };
