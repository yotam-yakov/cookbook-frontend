// import { useState } from 'react';

// function useFormValidation() {
//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isValid, setIsValid] = useState(false);

//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setValues({ ...values, [name]: value });
//     setErrors({ ...errors, [name]: evt.target.validationMessage });
//     setIsValid(evt.target.closest('form').checkValidity());
//   };

//   const resetForm = () => {
//     setValues({});
//     setErrors({});
//     setIsValid(false);
//   };

//   return {
//     values,
//     handleChange,
//     errors,
//     isValid,
//     resetForm,

//     setValues,
//     setIsValid,
//   };
// }

import { create } from 'zustand';

const useValuesStorage = create((set) => ({
  values: {},
  errors: {},
  isValid: false,
  handleChange: (evt) =>
    set((state) => ({
      values: { ...state.values, [evt.target.name]: evt.target.value },
      errors: {
        ...state.errors,
        [evt.target.name]: evt.target.validationMessage,
      },
      isValid: evt.target.closest('form').checkValidity(),
    })),
}));

export default useValuesStorage;
