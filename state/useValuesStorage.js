import { create } from 'zustand';

const useValuesStorage = create((set) => ({
  values: {},
  switches: {},
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
  handleSwitches: (evt) =>
    set((state) => ({
      switches: { ...state.switches, [evt.target.name]: evt.target.checked },
    })),
  setValue: (property) =>
    set((state) => ({
      values: { ...state.values, [property.key]: property.value },
    })),
  setSwitch: (property) =>
    set((state) => ({
      switches: { ...state.switches, [property.key]: property.value },
    })),
  clearAll: () =>
    set(() => ({
      values: {},
      switches: {},
      errors: {},
    })),
}));

export default useValuesStorage;
