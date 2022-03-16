const createProjectForm = $("#create-project-form");

const handleCreateProject = async (event) => {
  event.preventDefault();

  const name = $("#name").val();
  const description = $("#description").val();
  const funding = $("#needed_funding").val();

  const payload = JSON.stringify({
    name,
    description,
    needed_funding: funding,
  });

  const response = await fetch("/api/projects", {
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/profile");
  } else {
    alert("Failed to create project");
  }
};

createProjectForm.on("submit", handleCreateProject);
