export const createContainer = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');

  const header = document.createElement('h2');
  header.setAttribute('id', 'header');
  header.innerHTML = 'TO DO LIST';

  const inputSection = document.createElement('div');
  inputSection.setAttribute('id', 'inputSection');

  const input = document.createElement('input');
  input.placeholder = 'Learn DOM';
  input.setAttribute('id', 'input');

  const addButton = document.createElement('button');
  addButton.innerHTML = 'Add';
  addButton.setAttribute('id', 'addButton');

  inputSection.appendChild(input);
  inputSection.appendChild(addButton);

  container.appendChild(header);
  container.appendChild(inputSection);

  const displaySection = document.createElement('ul');
  displaySection.setAttribute('id', 'displaySection');

  const root = document.getElementById('root');
  root.appendChild(container);
  root.appendChild(displaySection);
};
