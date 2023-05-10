import { getList } from './UpdateList.js';

const completedList = (index) => {
  const checkbox = document.getElementById(`check${index}`);
  const completeTask = getList();

  // Mark task as completed
  completeTask[index].completed = checkbox.checked;

  // Delete task if checkbox is checked
  if (checkbox.checked) {
    completeTask.splice(index, 1);
  }
  localStorage.setItem('completeTask', JSON.stringify(completeTask));
};

export default completedList;