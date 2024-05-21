import { addItems } from '../handlers/add-items.js';

export const addItemsListener = () => {
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', addItems);
};
