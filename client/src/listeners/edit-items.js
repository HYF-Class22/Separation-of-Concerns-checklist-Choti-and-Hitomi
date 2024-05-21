import { editItems } from '../handlers/edit-items.js';

export const editItemsListener = (el) => {
  el.addEventListener('click', editItems);
};
