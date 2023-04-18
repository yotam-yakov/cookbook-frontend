import { create } from 'zustand';

const useMessageStorage = create((set, get) => ({
  isMessageOpen: false,
  messageProps: {
    message: '',
    isError: false,
    onClose: async () => await get().closeMessage(),
  },
  setMessageProps: (props) =>
    set(() => ({
      messageProps: {
        message: props.message,
        isError: props.isError,
        onClose: async () => {
          await get().closeMessage();
          props.onClose();
        },
      },
      isMessageOpen: true,
    })),
  openMessage: () => set(() => ({ isMessageOpen: true })),
  closeMessage: async () => set(() => ({ isMessageOpen: false })),
}));

export default useMessageStorage;
