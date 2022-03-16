const formElement = $('#new-project-form');
const addProjectModal = $('#add-project-modal');
const projectTBody = $('#project-tbody');
const clockTime = $('#clock-time');

const calculateDaysRemaining = function (date) {
  const dateTimeNow = moment();
  const dueDate = moment(date);
  const duration = moment.duration(dueDate.diff(dateTimeNow));
  const days = Math.floor(duration.asDays() * 10) / 10;

  return days;
};

const calculateTotalEarning = function (rate, days) {
  return rate * 8 * days;
};

const renderProjects = function () {
  const projects = JSON.parse(localStorage.getItem('projects')) || [];

  const constructRowAndAppend = function (data, index) {
    const remainingDays = calculateDaysRemaining(data.dueDate);
    const project = `<tr>
      <th scope="row">${index + 1}</th>
      <td>${data.projectName}</td>
      <td>${data.projectType}</td>
      <td>${data.hourlyWage}</td>
      <td>${data.dueDate}</td>
      <td>${remainingDays} days</td>
      <td>£${calculateTotalEarning(data.hourlyWage, remainingDays)}</td>
      <td>
        <button name="del-btn" type="button" id=${index} class="btn btn-danger">Delete</button>
      </td>
    </tr>`;
    projectTBody.append(project);
  };

  projectTBody.empty();

  projects.forEach(constructRowAndAppend);
};

const addToLocalStorage = function (project) {
  // get projects from LS
  const projectsFromLocalStorage =
    JSON.parse(localStorage.getItem('projects')) || [];

  // update projects array with project
  projectsFromLocalStorage.push(project);

  // write back to LS
  localStorage.setItem('projects', JSON.stringify(projectsFromLocalStorage));
};

const addNewProject = function (event) {
  event.preventDefault();

  // getting values from form elements
  const projectName = $('#projectName').val();
  const projectType = $('#projectType').val();
  const hourlyWage = $('#hourlyWage').val();
  const dueDate = $('#datepicker').val();

  // create a project object
  const project = {
    projectName: projectName,
    projectType: projectType,
    hourlyWage: hourlyWage,
    dueDate: dueDate,
  };

  // store project object in local storage
  addToLocalStorage(project);

  // re-render projects from local storage
  renderProjects();
};

const handleDelete = function (event) {
  const target = $(event.target);

  if (target.is('button[name="del-btn"]')) {
    const projectIndexToRemove = parseInt(target.attr('id'));

    const projectsFromLocalStorage =
      JSON.parse(localStorage.getItem('projects')) || [];

    const projectToKeep = function (_, index) {
      return index !== projectIndexToRemove;
    };

    const newProjects = projectsFromLocalStorage.filter(projectToKeep);

    localStorage.setItem('projects', JSON.stringify(newProjects));

    renderProjects();
  }
};

const displayClock = function () {
  const time = moment();
  const formattedTime = time.format('HH:mm:ss');
  clockTime.text(formattedTime);
};

const startTimer = function () {
  setInterval(displayClock, 1000);
};

const onReady = function () {
  displayClock();
  startTimer();
  renderProjects();
  $('#datepicker').datepicker();
  formElement.on('submit', addNewProject);
  projectTBody.on('click', handleDelete);
};

$(document).ready(onReady);
