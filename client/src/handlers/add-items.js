import { deleteItemsListener } from '../listeners/delete-items.js';
import { editItemsListener } from '../listeners/edit-items.js';

export const addItems = () => {
  const ul = document.getElementById('displaySection');
  const inputValue = document.getElementById('input').value;

  const toDoListItem = document.createElement('li');
  toDoListItem.classList = 'toDoListItem';

  const itemSection = document.createElement('div');
  itemSection.classList = 'itemSection';

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList = 'checkbox';

  const listItem = document.createElement('label');
  listItem.setAttribute('for', checkbox.id);
  listItem.classList = 'listItem';
  listItem.innerHTML = inputValue;

  itemSection.appendChild(checkbox);
  itemSection.appendChild(listItem);

  const buttonSection = document.createElement('div');
  buttonSection.classList = 'buttonSection';

  const editButton = document.createElement('button');
  editButton.classList = 'editButton';
  editButton.innerHTML = 'Edit';

  /*  editButton.addEventListener('click', () => {
    listItem.contentEditable = true;
  });
  */

  const deleteButton = document.createElement('button');
  deleteButton.classList = 'deleteButton';
  deleteButton.innerHTML = 'Delete';

  buttonSection.appendChild(editButton);
  buttonSection.appendChild(deleteButton);

  toDoListItem.appendChild(itemSection);
  toDoListItem.appendChild(buttonSection);

  ul.appendChild(toDoListItem);
  deleteItemsListener(deleteButton);
  editItemsListener(editButton);
};
