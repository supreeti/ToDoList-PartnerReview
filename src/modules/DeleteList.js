const deleteList = (index) => {
  const toDoList = document.getElementById(`todo${index}`);
  if (toDoList) {
    toDoList.remove();
  }
};

export default deleteList;