import { deleteItems } from '../handlers/delete-items.js';

export const deleteItemsListener = (el) => {
  el.addEventListener('click', deleteItems);
};
