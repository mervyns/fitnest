import { MODAL_CLOSE, MODAL_OPEN } from "../types/modalTypes";
import { createReducer } from "../common/utils/reducerUtil";

const initialState = null;

export const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

export const closeModal = (state, payload) => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
