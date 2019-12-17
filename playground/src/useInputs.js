import { useReducer, useCallback } from 'react';

function reducer(form, action) {
  switch (action.type) {
    case 'CHANGE_FORM':
      return {
        ...form,
        [action.name]: action.value,
      };
    case 'RESET_FORM':
      return Object.keys(form).reduce((acc, current) => {
        console.log(acc);
        acc[current] = '';
        return acc;
      }, {});
    default:
      throw new Error('Unhandled action')
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    console.log(name, value)
    dispatch({
      type: 'CHANGE_FORM',
      name,
      value
    })
  }, []);

  const reset = useCallback(() => {
    console.log('리셋')
    dispatch({type: 'RESET_FORM'})
  }, []);

  return [form, onChange, reset];
};

export default useInputs;