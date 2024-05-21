export const deleteItems = (event) => {
  event.target.closest('.toDoListItem').remove();
};
