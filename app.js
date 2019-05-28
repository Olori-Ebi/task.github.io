//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  //Add task event
  form.addEventListener('submit',addTask);
  //Remove task events
  taskList.addEventListener('click',removeTask);
  //Clear Tasks
  clearBtn.addEventListener('click',clearTask);
  //filter Task
  filter.addEventListener('keyup',filterTask);
}

function addTask(e){
  if (taskInput.value===' ') {
    alert('Add a task')
  }
  // create li element
  const li = document.createElement('li');

  //Add class
  li.className = 'collection-item';

  //create textnode and append to the li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement('a');

  //Add Class
  link.className = 'delete-item secondary-content';

  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear Task
function clearTask(e) {
  //taskList.innerHTML = '';
  while (taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!= -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

}